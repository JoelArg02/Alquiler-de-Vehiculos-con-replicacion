import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/vehicleDetails.css";

const VehicleDetails = () => {
    const { id } = useParams();
    
    const [car, setCar] = useState({
        id_agencia: '',
        tipo_vehiculos: '',
        imagen_vehiculo: '',
        kilometraje_vehiculo: '',
        nombre_vehiculo: '',
        modelo_vehiculo: '',
        transmision_vehiculo: '',
        rating_vehiculo: '',
        descripcion_vehiculo: '',
        precio_vehiculo: '',
        disponibilidad_vehiculo: ''
    });

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/vehiculos/${id}`);
                setCar(response.data);
            } catch (error) {
                console.error("Error al obtener el vehículo:", error);
            }
        };
        fetchCar();
    }, [id]);

    return (
        <div className="vehicle-details-container">
            <h3 className="vehicle-details-title">Detalles del Vehículo</h3>
            <div className="vehicle-details-content">
                <p><strong>Agencia:</strong> {car.id_agencia}</p>
                <p><strong>Tipo de vehículo:</strong> {car.tipo_vehiculos}</p>
                <p><strong>Imagen:</strong> {car.imagen_vehiculo}</p>
                <p><strong>Kilometraje:</strong> {car.kilometraje_vehiculo}</p>
                <p><strong>Nombre:</strong> {car.nombre_vehiculo}</p>
                <p><strong>Modelo:</strong> {car.modelo_vehiculo}</p>
                <p><strong>Transmisión:</strong> {car.transmision_vehiculo}</p>
                <p><strong>Rating:</strong> {car.rating_vehiculo}</p>
                <p><strong>Descripción:</strong> {car.descripcion_vehiculo}</p>
                <p><strong>Precio:</strong> {car.precio_vehiculo}</p>
                <p><strong>Disponibilidad:</strong> {car.disponibilidad_vehiculo ? 'Disponible' : 'No disponible'}</p>
            </div>
            <Link to={`/adminShowCar`} className="btn btn-primary">Regresar</Link>
        </div>
    );
};

export default VehicleDetails;
