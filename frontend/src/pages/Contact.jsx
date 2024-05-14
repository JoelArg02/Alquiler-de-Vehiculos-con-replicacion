import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contacto = () => {
  return (
    <Helmet title="Contacto">
      <CommonSection title="Contacto" />
      <section>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <div className="contact__info">
                <h6 className="fw-bold">Maztriz</h6>
                <p className="section__description mb-0">
                  Av. Los Shyris y Naciones Unidas, Quito, Ecuador
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Teléfono:</h6>
                  <p className="section__description mb-0">+593 998500498</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Correo Electrónico:</h6>
                  <p className="section__description mb-0">ejemplo1@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Síguenos</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="contact__info">
                <h6 className="fw-bold">Sede Sur</h6>
                <p className="section__description mb-0">
                  Av. Marsical Sucre y Ajavi, Quito, Ecuador
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Teléfono:</h6>
                  <p className="section__description mb-0">+593 998500498</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Correo Electrónico:</h6>
                  <p className="section__description mb-0">ejemplo@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Síguenos</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="contact__info">
                <h6 className="fw-bold">Sede Valle</h6>
                <p className="section__description mb-0">
                  Av.Rumiñahui y Av. Ilalo, Sangolqui, Ecuador
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Teléfono:</h6>
                  <p className="section__description mb-0">+593 998500498</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Correo Electrónico:</h6>
                  <p className="section__description mb-0">ejemplo@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Síguenos</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contacto;
