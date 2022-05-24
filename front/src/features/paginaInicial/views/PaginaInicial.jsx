import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import LoginModal from "../../login/";

const PaginaInicial = (props) => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const [modalLoginAberto, setModalLoginAberto] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img alt="..." className="path" src={require("assets/img/blob.png").default} />
          <img alt="..." className="path2" src={require("assets/img/path2.png").default} />
          <img alt="..." className="shapes triangle" src={require("assets/img/triunghiuri.png").default} />
          <img alt="..." className="shapes wave" src={require("assets/img/waves.png").default} />
          <img alt="..." className="shapes squares" src={require("assets/img/patrat.png").default} />
          <img alt="..." className="shapes circle" src={require("assets/img/cercuri.png").default} />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="8" md="6">
                <h1 className="text-white">
                  Aprenda a organizar seu <br />
                  <span className="text-white">dindin</span>
                </h1>
                <p className="text-white mb-3">A oportunidade de controlar suas finanças de forma prática</p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline" id="cadastro">
                    Entre na sua conta
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-down" />
                  </Button>
                </div>
                <Button color="success" target="_blank" onClick={() => setModalLoginAberto(true)} id="minhacarteira">
                  Minha carteira
                </Button>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  id="imagemLayout"
                  className="img-fluid"
                  src={require("assets/img/etherum.png").default}
                />
              </Col>
            </Row>
            <LoginModal
              usuario={usuario}
              setUsuario={setUsuario}
              senha={senha}
              setSenha={setSenha}
              modalAberto={modalLoginAberto}
              setModalAberto={setModalLoginAberto}
              id="loginModal"
            />
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img alt="..." className="path" src={require("assets/img/path4.png").default} />
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PaginaInicial;
