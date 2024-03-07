import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); // Cambiado de email a username para claridad
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Usa useNavigate para la navegación

  const handleLogin = (e) => {
    e.preventDefault();
    // Verifica si las credenciales son correctas
    if (username === "admin" && password === "admin") {
      console.log("Login exitoso");
      localStorage.setItem("logeado", "true");
      // Redirige al usuario a la página principal o dashboard
      navigate("/dashboard"); // Usa navigate en lugar de history.push
    } else {
      console.log("Credenciales incorrectas");
      // Aquí puedes manejar el error de credenciales incorrectas
      alert("Credenciales incorrectas"); // Ejemplo simple, considera usar un método más sofisticado
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="3">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
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
            <Button color="primary" block>Ingresar</Button>
          </Form>
          <div className="text-center mt-3">
            <p>No estás registrado? <Link to="/signup">Regístrate</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
