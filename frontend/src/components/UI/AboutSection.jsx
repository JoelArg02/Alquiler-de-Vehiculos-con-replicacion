import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Sobre nosotros</h4>
              <h2 className="section__title">Bienvenido a Amazin</h2>
              <p className="section__description">
              ¡Bienvenido a nuestro sitio de renta de carros! Estamos encantados 
              de tenerte aquí. En nuestra plataforma, encontrarás una amplia selección 
              de vehículos para satisfacer tus necesidades de movilidad. Ya sea que estés 
              planeando un viaje de negocios, unas vacaciones familiares o simplemente 
              necesites un auto por un tiempo, estamos aquí para ayudarte a encontrar 
              la opción perfecta. Explora nuestra variedad de modelos, tarifas competitivas 
              y servicios adicionales para hacer que tu experiencia de alquiler sea fácil y 
              conveniente. ¡Comienza tu aventura con nosotros hoy mismo!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
