import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Button } from "reactstrap";

const BookingForm = ({carDetails}) => {
  const submitHandler = (event) => {
    event.preventDefault();

    // Recoge los valores del formulario
    const firstName = event.target.querySelector(
      '[placeholder="Nombre"]'
    ).value;
    const lastName = event.target.querySelector(
      '[placeholder="Apellido"]'
    ).value;
    const email = event.target.querySelector(
      '[placeholder="Correo Electrónico"]'
    ).value;
    const phoneNumber = event.target.querySelector(
      '[placeholder="Número de Teléfono"]'
    ).value;
    const fromAddress = event.target.querySelector(
      '[placeholder="Dirección de Origen"]'
    ).value;
    const toAddress = event.target.querySelector(
      '[placeholder="Dirección de Destino"]'
    ).value;
   const message = `Hola, mi nombre es ${firstName} ${lastName}. Estoy interesado/a en más información sobre el vehículo ${carDetails.carName}, modelo ${carDetails.model}. Aquí mis detalles:
   Correo Electrónico: ${email}
   Número de Teléfono: ${phoneNumber}
   Dirección de Origen: ${fromAddress}
   Dirección de Destino: ${toAddress}
   Información del vehículo: ${carDetails.carName}, ${carDetails.model}, ${carDetails.price} por día`;
   ;

    const encodedMessage = encodeURIComponent(message);
    
    const whatsappNumber = "593998500498"; 
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Nombre" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Apellido" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Correo Electrónico" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Número de Teléfono" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Dirección de Origen" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Dirección de Destino" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Persona</option>
          <option value="2 person">2 Personas</option>
          <option value="3 person">3 Personas</option>
          <option value="4 person">4 Personas</option>
          <option value="5+ person">5+ Personas</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 Maleta</option>
          <option value="2 luggage">2 Maletas</option>
          <option value="3 luggage">3 Maletas</option>
          <option value="4 luggage">4 Maletas</option>
          <option value="5+ luggage">5+ Maletas</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>
      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      <Button type="submit" color="primary">
        Enviar Información
      </Button>
    </Form>
  );
};

export default BookingForm;
