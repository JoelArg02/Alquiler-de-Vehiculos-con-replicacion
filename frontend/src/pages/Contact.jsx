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
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Ponte en Contacto</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Tu Nombre" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Correo Electrónico" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Mensaje"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Enviar Mensaje
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Información de Contacto</h6>
                <p className="section__description mb-0">
                  Av. Los Shyris y Naciones Unidas, Quito, Ecuador
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
