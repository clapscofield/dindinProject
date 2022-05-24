import React, { useEffect, useState } from "react";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  UncontrolledAlert,
  Col
} from "reactstrap";
import { register } from "../../../redux/actionCreators";
import { connect } from "react-redux";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const CadastroInstituicao = (props) => {
  const { message } = props;
  const [squares1to6, setSquares1to6] = useState("");
  const [squares7and8, setSquares7and8] = useState("");

  const [botaoHabilitado, setBotaoHabilitado] = useState(true);
  const [fullNameFocus, setFullNameFocus] = useState(false);
  const [descriptionFocus, setDescriptionFocus] = useState(false);
  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [termosCondicoes, setTermosCondicoes] = useState("");
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    setBotaoHabilitado(nome && descricao && login && email && senha && termosCondicoes);
  }, [setBotaoHabilitado, nome, descricao, login, email, senha, termosCondicoes]);

  const cadastrarInstituicao = async () => {
    const usuario = {
      usuario: login,
      nome: nome,
      senha: senha,
      descricao: descricao,
      email: email
    };

    setSucesso(false);

    props
      .dispatch(register(usuario))
      .then(() => {
        setSucesso(true);
      })
      .catch(() => {
        setSucesso(false);
      });
  };

  useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  /* Animação dos Squares */
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6("perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)");
    setSquares7and8("perspective(500px) rotateY(" + posX * 0.02 + "deg) rotateX(" + posY * -0.02 + "deg)");
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div className="square square-7" id="square7" style={{ transform: squares7and8 }} />
                  <div className="square square-8" id="square8" style={{ transform: squares7and8 }} />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg alt="..." src={require("assets/img/square-purple-1.png").default} />
                      <CardTitle tag="h4" id="tituloCadastro">
                        Registro
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" id="formularioCadastro">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            value={nome}
                            placeholder="Nome"
                            type="text"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                            onChange={(e) => setNome(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": descriptionFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-notes" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            value={descricao}
                            placeholder="Descrição"
                            type="text"
                            onFocus={(e) => setDescriptionFocus(true)}
                            onBlur={(e) => setDescriptionFocus(false)}
                            onChange={(e) => setDescricao(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": loginFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            value={login}
                            placeholder="Login"
                            type="text"
                            onFocus={(e) => setLoginFocus(true)}
                            onBlur={(e) => setLoginFocus(false)}
                            onChange={(e) => setLogin(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            value={email}
                            placeholder="Email"
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            value={senha}
                            placeholder="Senha"
                            type="password"
                            autoComplete="new-password"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                            onChange={(e) => setSenha(e.target.value)}
                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" onChange={(e) => setTermosCondicoes(e.target.checked)} />
                            <span className="form-check-sign" />
                            Concordo com os{" "}
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              termos e condições
                            </a>
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="primary"
                        size="lg"
                        disabled={!botaoHabilitado}
                        id="botaoCadastro"
                        onClick={() => cadastrarInstituicao()}
                      >
                        Começar
                      </Button>
                      <a
                        href="/pagina-inicial" /* TODO Colocar o link para a pagina do login */
                        className="ml-3"
                        onClick={(e) => e.preventDefault()}
                      >
                        Já tenho conta. Ir para página inicial.
                      </a>
                    </CardFooter>
                  </Card>
                  {message && (
                    <UncontrolledAlert color={sucesso ? "success" : "danger"}>
                      <span>{message}</span>
                    </UncontrolledAlert>
                  )}
                </Col>
              </Row>
              <div className="register-bg" />
              <div className="square square-1" id="square1" style={{ transform: squares1to6 }} />
              <div className="square square-2" id="square2" style={{ transform: squares1to6 }} />
              <div className="square square-3" id="square3" style={{ transform: squares1to6 }} />
              <div className="square square-4" id="square4" style={{ transform: squares1to6 }} />
              <div className="square square-5" id="square5" style={{ transform: squares1to6 }} />
              <div className="square square-6" id="square6" style={{ transform: squares1to6 }} />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message
  };
}

export default connect(mapStateToProps)(CadastroInstituicao);
