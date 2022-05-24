import React, { useState, useEffect } from "react";
import { Button, Form, Input, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Modal, Alert } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import Datetime from "react-datetime";
import { setMessage } from "../../../redux/actionCreators";
import moment from "moment";

const EditarModal = (props) => {
  const { message, setMessageRedux, modalAberto, setModalAberto, dadosTransacao, setDadosTransacao } = props;

  const [valorFocus, setValorFocus] = useState(false);
  const [descricaoFocus, setDescricaoFocus] = useState(false);
  const [categoriaFocus, setCategoriaFocus] = useState(false);
  //const [dataFocus, setDataFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sucesso, setSucesso] = useState(false);
  const [alertaAberto, setAlertaAberto] = useState(false);

  useEffect(() => {
    setAlertaAberto(message && message.message);
  }, [message]);

  return (
    <Modal modalClassName="modal-black" isOpen={modalAberto} toggle={() => setModalAberto(false)}>
      <div className="modal-header justify-content-center">
        <button className="close" onClick={() => setModalAberto(false)}>
          <i className="tim-icons icon-simple-remove text-white" />
        </button>
        <div className="text-muted text-center ml-auto mr-auto">
          <h3 className="mb-0">Editar transação</h3>
        </div>
      </div>
      <div className="modal-body">
        <div className="text-center text-muted mb-4 mt-3">
          <small>Edite os campos desejados:</small>
        </div>
        <Form role="form">
          <FormGroup className="mb-3">
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": valorFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-badge" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Valor"
                type="text"
                value={dadosTransacao && dadosTransacao.valor}
                onChange={(e) => {
                  setDadosTransacao({
                    ...dadosTransacao,
                    valor: e.target.value
                  });
                }}
                onFocus={(e) => setValorFocus(true)}
                onBlur={(e) => setValorFocus(false)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": descricaoFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-key-25" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Descrição"
                type="text"
                value={dadosTransacao && dadosTransacao.descricao}
                onChange={(e) =>
                  setDadosTransacao({
                    ...dadosTransacao,
                    descricao: e.target.value
                  })
                }
                onFocus={(e) => setDescricaoFocus(true)}
                onBlur={(e) => setDescricaoFocus(false)}
              />
            </InputGroup>
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": categoriaFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-badge" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Categoria"
                  type="text"
                  value={dadosTransacao && dadosTransacao.categoria}
                  onChange={(e) =>
                    setDadosTransacao({
                      ...dadosTransacao,
                      categoria: e.target.value
                    })
                  }
                  onFocus={(e) => setCategoriaFocus(true)}
                  onBlur={(e) => setCategoriaFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup className={classnames("input-group-alternative")}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-badge" />
                  </InputGroupText>
                </InputGroupAddon>
                <Datetime
                  value={dadosTransacao && moment(dadosTransacao.data).format("DD/MM/YYYY")}
                  timeFormat={false}
                  inputProps={{ placeholder: "Data" }}
                  dateFormat={"DD/MM/YYYY"}
                  onChange={(e) =>
                    setDadosTransacao({
                      ...dadosTransacao,
                      data: e
                    })
                  }
                />
              </InputGroup>
            </FormGroup>
          </FormGroup>
          <div className="text-center">
            <Button
              className="my-4"
              color="primary"
              type="button"
              disabled={loading}
              onClick={() => handleSalvarAlteracoes()}
            >
              {loading && <span className="spinner-border spinner-border-sm"></span>}
              Salvar alterações
            </Button>
          </div>
          {message && sucesso && (
            <Alert color={"success"} isOpen={alertaAberto} toggle={() => setAlertaAberto(false)}>
              <span>{message}</span>
            </Alert>
          )}
        </Form>
      </div>
    </Modal>
  );
};

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message
  };
}

const mapDispatchToProps = (dispatch) => ({
  setMessageRedux: (message) => dispatch(setMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditarModal);
