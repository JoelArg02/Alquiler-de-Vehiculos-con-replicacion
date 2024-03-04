import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Sobre Nosotros",
  },

  {
    path: "#",
    display: "Politica de Privacidad",
  },

  {
    path: "/cars",
    display: "Carros",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contacto",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Servicio <br /> Renta de carros
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Estamos emocionados de tenerte aquí y de ser parte de tu próxima 
            aventura sobre ruedas. En nuestro sitio, encontrarás una gama 
            diversa de automóviles, desde compactos ágiles hasta espaciosas 
            SUVs, diseñadas para adaptarse a tus necesidades y preferencias 
            de viaje.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Enlaces rapidos</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Matriz</h5>
              <p className="office__info">Iñaquito, Quito, Ecuador</p>
              <p className="office__info">Phone: +593 995064852</p>

              <p className="office__info">Email: amazingrentcar@gmail.com</p>

              <p className="office__info">Horario: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Noticias Nuevas</h5>
              <p className="section__description">Suscribete para recibir noticias nuevas</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by Joel Arguello
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
