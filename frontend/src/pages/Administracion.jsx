import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Link, useNavigate  } from "react-router-dom";
import "../styles/administracion.css";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Comprobar si el usuario está logeado y tiene un token
    const logeado = localStorage.getItem("logeado");
    const token = localStorage.getItem("token");
    if (logeado !== "true" || !token) {
      // Si no está logeado o no tiene un token, redirigir a /home
      navigate("/home");
    }
  }, [navigate]);
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="12">
          <h2 className="text-center mb-4">Bienvenido a la Administración</h2>
          <Row className="mb-4">
            <Col className="text-center">
              <Link to="/adminShowCar">
                <Button color="primary" size="lg" className="cubo-btn">
                  Administración de vehículos
                </Button>
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/administracion/clientes">
                <Button color="primary" size="lg" className="cubo-btn">
                  Administración de clientes
                </Button>
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/administracion/reservas">
                <Button color="primary" size="lg" className="cubo-btn">
                  Administración de reservas
                </Button>
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/administracion/agencias">
                <Button color="primary" size="lg" className="cubo-btn">
                  Administración de agencias
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
