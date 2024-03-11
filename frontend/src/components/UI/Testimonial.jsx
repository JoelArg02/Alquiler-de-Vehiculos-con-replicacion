import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "¡Increíble experiencia con esta empresa de alquiler de autos! 
        Reservé un coche para un viaje de negocios de último minuto y 
        el proceso fue rápido y sin complicaciones. El auto estaba impecable 
        y el personal fue muy amable y servicial. Definitivamente los 
        recomendaría a cualquiera que necesite alquilar un auto".
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Alejandro Sarmiento</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Alquilé un auto para unas vacaciones familiares y estoy muy impresionado 
        con el servicio que recibí. El proceso de reserva en línea fue fácil y el 
        precio era muy competitivo. El auto que recibimos estaba en excelentes condiciones 
        y nos permitió disfrutar plenamente de nuestro viaje. ¡Definitivamente volveré 
        a usar esta empresa en el futuro!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Elsa Pito</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "¡Una experiencia perfecta de principio a fin! Desde el momento en 
        que entré en la oficina de la empresa, me sentí bienvenido y 
        valorado como cliente. El personal fue extremadamente profesional 
        y se tomó el tiempo para explicar todos los detalles del contrato 
        de alquiler. El auto que alquilé estaba limpio y bien mantenido. 
        Sin duda, volveré a alquilar con ellos en mi próximo viaje".
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Diego Portilla</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "¡No puedo recomendar esta empresa lo suficiente! Alquilé un auto 
        para un fin de semana largo y quedé impresionada con la calidad del 
        servicio. El proceso de recogida y devolución fue rápido y eficiente
        , y el personal fue extremadamente servicial. El auto estaba en 
        excelente estado y era perfecto para nuestras necesidades.
         Definitivamente volveré a elegir esta empresa en el futuro".
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Juana Suarez</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
