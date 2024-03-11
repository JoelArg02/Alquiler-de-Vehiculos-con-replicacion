import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("logeado", "true");
      localStorage.setItem("token", "1"); // Guarda el token en localStorage
      // Navega a '/administracion' con una recarga completa de la página
      window.location.href = "/administracion";
    } else {
      console.log("Credenciales incorrectas");
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="3">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <h3 className="text-center mb-4">Solo si eres administrador</h3>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="username">Usuario</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" block>
              Ingresar
            </Button>
          </Form>
          <div className="text-center mt-3"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
