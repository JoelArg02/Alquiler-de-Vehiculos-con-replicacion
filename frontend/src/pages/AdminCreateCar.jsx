import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = 'http://localhost:5000/api/v1/vehiculos';

const AdminCreateCar = () => {
    const [idAgencia, setIdAgencia] = useState();
    const [tipoVehiculo, setTipoVehiculo] = useState('');
    const [imagenVehiculo, setImagenVehiculo] = useState('');
    const [kilometrajeVehiculo, setKilometrajeVehiculo] = useState('');
    const [nombreVehiculo, setNombreVehiculo] = useState('');
    const [modeloVehiculo, setModeloVehiculo] = useState('');
    const [transmisionVehiculo, setTransmisionVehiculo] = useState('');
    const [ratingVehiculo, setRatingVehiculo] = useState('');
    const [descripcionVehiculo, setDescripcionVehiculo] = useState('');
    const [precioVehiculo, setPrecioVehiculo] = useState('');
    const [disponibilidadVehiculo, setDisponibilidadVehiculo] = useState('');
    const navigate = useNavigate();
    
   
    const store = async (e) => {
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
                disponibilidad_vehiculo: disponibilidadVehiculo
            });
            navigate('/adminShowCar');
        } catch (error) {
            console.error("Error al crear el vehículo:", error);
        }
    };

    return (
        <div>
           <h3>Crear Vehículo</h3>
           <form onSubmit={store}>

    <div className='mb-3'>
        <label className='form-label'>Agencia</label>
        <input
            value={idAgencia}
            onChange={(e) => setIdAgencia(e.target.value)} 
            type="text"
            className='form-control'
        />
    </div>

    <div className='mb-3'>
        <label className='form-label'>Tipo de vehículo</label>
        <input
            value={tipoVehiculo}
            onChange={(e) => setTipoVehiculo(e.target.value)} 
            type="text"
            className='form-control'
        />                 
    </div>
    <div className='mb-3'>
                    <label className='form-label'>Disponibilidad</label>
                    <select
                        value={disponibilidadVehiculo}
                        onChange={(e) => setDisponibilidadVehiculo(e.target.value === 'true')} 
                        className='form-select'
                    >
                        <option value={'true'}>Disponible</option>
                        <option value={false}>No disponible</option>
                        
                    </select>
    </div>

    <div className='mb-3'>
        <label className='form-label'>Imagen</label>
        <input
            value={imagenVehiculo}
            onChange={(e) => setImagenVehiculo(e.target.value)} 
            type="text"
            className='form-control'
        />                 
    </div>

    <div className='mb-3'>
        <label className='form-label'>Kilometraje</label>
        <input
            value={kilometrajeVehiculo}
            onChange={(e) => setKilometrajeVehiculo(e.target.value)} 
            type="text"
            className='form-control'
        />                 
    </div>
    <div className='mb-3'>
        <label className='form-label'>Nombre</label>
        <input
            value={nombreVehiculo}
            onChange={(e) => setNombreVehiculo(e.target.value)} 
            type="text"
            className='form-control'
        />
    </div>   

    <div className='mb-3'>
        <label className='form-label'>Modelo</label>
        <input
            value={modeloVehiculo}
            onChange={(e) => setModeloVehiculo(e.target.value)} 
            type="text"
            className='form-control'
        />                 
    </div>
    <div className='mb-3'>
        <label className='form-label'>Transmisión</label>
        <input
            value={transmisionVehiculo}
            onChange={(e) => setTransmisionVehiculo(e.target.value)} 
            type="text"
            className='form-control'
        />                 
    </div>
    <div className='mb-3'>
        <label className='form-label'>Rating</label>
        <input
            value={ratingVehiculo}
            onChange={(e) => {
                const regex = /^\d*\.?\d*$/; // Expresión regular para permitir solo números y un punto
                if (regex.test(e.target.value)) {
                    setRatingVehiculo(e.target.value);
                }
            }} 
            type="text"
            className='form-control'
        />                 
    </div>
    <div className='mb-3'>
        <label className='form-label'>Descripción</label>
        <textarea
            value={descripcionVehiculo}
            onChange={(e) => setDescripcionVehiculo(e.target.value)} 
            className='form-control'
        />                 
    </div>  

    <div className='mb-3'>
        <label className='form-label'>Precio</label>
        <input
            value={precioVehiculo}
            onChange={(e) => {
                const regex = /^\d*\.?\d*$/; // Expresión regular para permitir solo números y un punto
                if (regex.test(e.target.value)) {
                    setPrecioVehiculo(e.target.value);
                }
            }} 
            type="text"
            className='form-control'
        />                 
    </div>

                    
    <button type='submit' className='btn btn-primary'>Guardar</button>                  
</form>

        </div>
    );
};

export default AdminCreateCar;
