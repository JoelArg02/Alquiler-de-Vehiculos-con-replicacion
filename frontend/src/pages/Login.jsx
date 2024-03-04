import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom"; // Asumiendo que estás utilizando React Router para la navegación

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log("Email:", email);
    console.log("Password:", password);
    // Por ahora, solo imprime el email y la contraseña en la consola
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="3">
          <h2 className="text-center mb-4">Iniciar Sesion</h2>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <p>No estas registrado? <Link to="/signup">Registrate</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
