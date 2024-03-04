import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    crearUsuario();
    console.log("Nombres:", nombres);
    console.log("Apellidos:", apellidos);
    console.log("Teléfono:", telefono);
    console.log("Dirección:", direccion);
    console.log("Correo:", correo);
  };

  const crearUsuario = async () => {
    try {
      const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombres,
          apellidos,
          telefono,
          direccion,
          correo
        })
      });
      if (!response.ok) {
        throw new Error("Error al crear usuario");
      }
      // Aquí podrías manejar la respuesta si lo necesitas
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="6">
          <h2 className="text-center mb-4">Registrarse</h2>
          <Form onSubmit={handleSignup}>
            <FormGroup>
              <Label for="nombres">Nombres</Label>
              <Input
                type="text"
                name="nombres"
                id="nombres"
                placeholder="Ingresa tus nombres"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="apellidos">Apellidos</Label>
              <Input
                type="text"
                name="apellidos"
                id="apellidos"
                placeholder="Ingresa tus apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="telefono">Teléfono</Label>
              <Input
                type="text"
                name="telefono"
                id="telefono"
                placeholder="Ingresa tu teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="direccion">Dirección</Label>
              <Input
                type="text"
                name="direccion"
                id="direccion"
                placeholder="Ingresa tu dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="correo">Correo</Label>
              <Input
                type="email"
                name="correo"
                id="correo"
                placeholder="Ingresa tu correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" block>Registrarse</Button>
          </Form>
          <div className="text-center mt-3">
            <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
