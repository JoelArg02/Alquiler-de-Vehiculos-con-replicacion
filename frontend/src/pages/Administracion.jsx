import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/administracion.css";


const HomePage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="12">
          <h2 className="text-center mb-4">Bienvenido a la Administración</h2>
          <Row className="mb-4">
            <Col className="text-center">
              <Link to="/adminShowCar">
                <Button color="primary" size="lg" className="cubo-btn">Administración de vehículos
                </Button>
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/administracion/clientes">
                <Button color="primary" size="lg" className="cubo-btn">Administración de clientes</Button>
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/administracion/reservas">
                <Button color="primary" size="lg" className="cubo-btn">Administración de reservas</Button>
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/administracion/agencias">
                <Button color="primary" size="lg" className="cubo-btn">Administración de agencias</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
