import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:5000/api/v1/clientes";

const Signup = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false); // Estado para controlar si el registro ha sido exitoso

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, { nombres, apellidos, telefono, direccion, correo });
      setRegistroExitoso(true); // Establecer el estado de registro exitoso como verdadero
    } catch (error) {
      console.error("Error al registrar:", error);
      // Aquí puedes manejar el error de manera adecuada si la solicitud falla
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="6">
        {!registroExitoso && ( // Mostrar el formulario solo si el registro no ha sido exitoso
            <>
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
          </>
          )}
          {registroExitoso && ( // Mostrar el mensaje de agradecimiento solo si el registro ha sido exitoso
            <div className="alert alert-success" role="alert">
              ¡Gracias por registrarte!

            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
