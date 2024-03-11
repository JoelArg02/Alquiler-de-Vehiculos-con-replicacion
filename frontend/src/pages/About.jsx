import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";


import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Sobre nosotros" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Estamos comprometidos a brindar soluciones de viaje seguro
                </h2>

                <p className="section__description">
                En nuestro compromiso por proporcionar soluciones de viaje seguro, 
                nos esforzamos cada día por garantizar la protección y tranquilidad 
                de nuestros clientes. Reconocemos la importancia primordial de la 
                seguridad en cada etapa del viaje, desde la planificación hasta el regreso a casa.
                </p>

                <p className="section__description">
                Nuestra prioridad es mantener estándares de seguridad excepcionales en todas 
                nuestras operaciones. Desde la selección de proveedores y la inspección de 
                vehículos, hasta la formación exhaustiva de nuestro personal, nos comprometemos 
                a cumplir con los más altos estándares de seguridad y calidad.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Necesitas ayuda?</h6>
                    <h4>+593 995064852</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Expertos</h6>
              <h2 className="section__title">Otros Miembros</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
