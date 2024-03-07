import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:5000/api/v1/vehiculos";

const RegistroVehiculo = () => {
    const [idAgencia, setIdAgencia] = useState("");
    const [tipoVehiculo, setTipoVehiculo] = useState("");
    const [imagenVehiculo, setImagenVehiculo] = useState("");
    const [kilometrajeVehiculo, setKilometrajeVehiculo] = useState("");
    const [nombreVehiculo, setNombreVehiculo] = useState("");
    const [modeloVehiculo, setModeloVehiculo] = useState("");
    const [transmisionVehiculo, setTransmisionVehiculo] = useState("");
    const [ratingVehiculo, setRatingVehiculo] = useState("");
    const [descripcionVehiculo, setDescripcionVehiculo] = useState("");
    const [precioVehiculo, setPrecioVehiculo] = useState("");
    const [disponibilidadVehiculo, setDisponibilidadVehiculo] = useState("");
    const [registroExitoso, setRegistroExitoso] = useState(false);

    const handleRegistro = async (e) => {
        e.preventDefault();
        try {
          await axios.post(URL, {
            id_agencia: idAgencia,
            tipo_vehiculo: tipoVehiculo,
            imagen_vehiculo: imagenVehiculo,
            kilometraje_vehiculo: kilometrajeVehiculo,
            nombre_vehiculo: nombreVehiculo,
            modelo_vehiculo: modeloVehiculo,
            transmision_vehiculo: transmisionVehiculo,
            rating_vehiculo: ratingVehiculo,
            descripcion_vehiculo: descripcionVehiculo,
            precio_vehiculo: precioVehiculo,
            disponibilidad_Vehiculo: disponibilidadVehiculo
          });
          setRegistroExitoso(true);
        } catch (error) {
          console.error("Error al registrar vehículo:", error);
        }
      };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="6">
        {!registroExitoso && ( // Mostrar el formulario solo si el registro no ha sido exitoso
            <>
          <h2 className="text-center mb-4">Registrarse</h2>
          <Form onSubmit={handleRegistro}>
      <FormGroup>
        <Label for="idAgencia">ID de Agencia</Label>
        <Input
          type="text"
          name="idAgencia"
          id="idAgencia"
          value={idAgencia}
          onChange={(e) => setIdAgencia(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="tipoVehiculo">Tipo de Vehículo</Label>
        <Input
          type="text"
          name="tipoVehiculo"
          id="tipoVehiculo"
          value={tipoVehiculo}
          onChange={(e) => setTipoVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="imagenVehiculo">Imagen del Vehículo</Label>
        <Input
          type="text"
          name="imagenVehiculo"
          id="imagenVehiculo"
          value={imagenVehiculo}
          onChange={(e) => setImagenVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="kilometrajeVehiculo">Kilometraje del Vehículo</Label>
        <Input
          type="text"
          name="kilometrajeVehiculo"
          id="kilometrajeVehiculo"
          value={kilometrajeVehiculo}
          onChange={(e) => setKilometrajeVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="nombreVehiculo">Nombre del Vehículo</Label>
        <Input
          type="text"
          name="nombreVehiculo"
          id="nombreVehiculo"
          value={nombreVehiculo}
          onChange={(e) => setNombreVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="modeloVehiculo">Modelo del Vehículo</Label>
        <Input
          type="text"
          name="modeloVehiculo"
          id="modeloVehiculo"
          value={modeloVehiculo}
          onChange={(e) => setModeloVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="transmisionVehiculo">Transmisión del Vehículo</Label>
        <Input
          type="text"
          name="transmisionVehiculo"
          id="transmisionVehiculo"
          value={transmisionVehiculo}
          onChange={(e) => setTransmisionVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="ratingVehiculo">Rating del Vehículo</Label>
        <Input
          type="text"
          name="ratingVehiculo"
          id="ratingVehiculo"
          value={ratingVehiculo}
          onChange={(e) => setRatingVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="descripcionVehiculo">Descripción del Vehículo</Label>
        <Input
          type="textarea"
          name="descripcionVehiculo"
          id="descripcionVehiculo"
          value={descripcionVehiculo}
          onChange={(e) => setDescripcionVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="precioVehiculo">Precio del Vehículo</Label>
        <Input
          type="text"
          name="precioVehiculo"
          id="precioVehiculo"
          value={precioVehiculo}
          onChange={(e) => setPrecioVehiculo(e.target.value)}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="disponibilidadVehiculo"
            id="disponibilidadVehiculo"
            checked={disponibilidadVehiculo}
            onChange={(e) => setDisponibilidadVehiculo(e.target.checked)}
          />{' '}
          Disponibilidad del Vehículo
        </Label>
      </FormGroup>
      <Button color="primary" block>Registrar Vehículo</Button>
      {registroExitoso && <p>¡Registro de vehículo exitoso!</p>}
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

export default RegistroVehiculo;
