import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  Alert
} from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { login } from "../../../redux/actionCreators";
import { Redirect } from "react-router-dom";

const LoginModal = (props) => {
  const {
    isLoggedIn,
    message,
    modalAberto,
    setModalAberto,
    usuario,
    setUsuario,
    senha,
    setSenha,
    dispatch,
    history
  } = props;

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    if (usuario !== null && usuario !== "" && senha !== null && senha !== "") {
      dispatch(login(usuario, senha))
        .then(() => {
          /* todo trocar push para rota da pagina inicial */
          history.push("/landing-usuario");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    }

    setLoading(false);
  };

  if (isLoggedIn) {
    /* TODO redirecionar para pagina inicial do usuario */
    return <Redirect to="/landing-usuario" />;
  }

  return (
    <Modal
      modalClassName="modal-black"
      isOpen={modalAberto}
      toggle={() => setModalAberto(false)}
    >
      <div className="modal-header justify-content-center">
        <button className="close" onClick={() => setModalAberto(false)}>
          <i className="tim-icons icon-simple-remove text-white" />
        </button>
        <div className="text-muted text-center ml-auto mr-auto">
          <h3 className="mb-0">Login</h3>
        </div>
      </div>
      <div className="modal-body">
        <div className="text-center text-muted mb-4 mt-3">
          <small>Entre com suas credenciais</small>
        </div>
        <Form role="form">
          <FormGroup className="mb-3">
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": emailFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Usuário"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                onFocus={(e) => setEmailFocus(true)}
                onBlur={(e) => setEmailFocus(false)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": passwordFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-key-25" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                onFocus={(e) => setPasswordFocus(true)}
                onBlur={(e) => setPasswordFocus(false)}
              />
            </InputGroup>
          </FormGroup>
          <div className="text-center">
            <Button
              className="my-4"
              color="primary"
              type="button"
              disabled={loading}
              onClick={() => handleLogin()}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              Entrar
            </Button>
          </div>
          {message && (
            <Alert color={"danger"}>
              <span>{message}</span>
            </Alert>
          )}
        </Form>
      </div>
    </Modal>
  );
};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(LoginModal);
