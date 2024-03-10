import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminEditCar = () => {
    const { id } = useParams(); // Obtener el ID del vehículo de los parámetros de la URL
    const navigate = useNavigate();
    
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
                setCar(response.data); // Establecer los datos del vehículo en el estado
            } catch (error) {
                console.error("Error al obtener el vehículo:", error);
            }
        };
        fetchCar();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Expresión regular para permitir solo números y un punto
        const regexNumberAndDot = /^[0-9.]*$/;

        // Validación específica para rating_vehiculo, precio_vehiculo y id_agencia
        if ((name === 'rating_vehiculo' || name === 'precio_vehiculo') && !regexNumberAndDot.test(value)) {
            return; // Si el valor no coincide con la expresión regular, no actualices el estado
        }

        // Validación específica para id_agencia
        if (name === 'id_agencia' && value !== '' && !/^\d+$/.test(value)) {
            return; // Si el valor no es un número (y no está vacío), no actualices el estado
        }

        setCar(prevCar => ({
            ...prevCar,
            [name]: value
        }));
    };
    
    const updateCar = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/v1/vehiculos/${id}`, car);
            navigate('/adminShowCar');
        } catch (error) {
            console.error("Error al actualizar el vehículo:", error);
        }
    };

    // Procedimiento para eliminar un útil
    const deleteVehiculos = async (id) => {
        try {
            await axios.delete(`${URL}${id}`);
            getVehiculos();
        } catch (error) {
            console.error("Error al eliminar el vehiculo:", error);
        }
    };


  
  return (
    <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Modelo</th>
                                <th>Rating</th>
                                <th>Precio</th>
                                <th>Disponibilidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehiculos.map((vehiculo, index) => (
                                <tr key={index}>
                                    <td>{vehiculo.nombre_vehiculo}</td>
                                    <td>{vehiculo.modelo_vehiculo}</td>
                                    <td>{vehiculo.rating_vehiculo}</td>
                                    <td>{vehiculo.precio_vehiculo}</td>
                                    <td>{vehiculo.disponibilidad_vehiculo ? 'Disponible' : 'No disponible'}</td>

                                    <td>
                                        <Link to={`/edit/${vehiculo._id}`} className='btn btn-info'><i className="fas fa-edit"></i>Editar</Link>
                                        <button onClick={() => deleteVehiculos(vehiculo._id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Tipo de vehículo</label>
                    <input
                        name="tipo_vehiculos"
                        value={car.tipo_vehiculos}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>Disponibilidad</label>
                    <select
                        name="disponibilidad_vehiculo"
                        value={car.disponibilidad_vehiculo}
                        onChange={handleInputChange} 
                        className='form-select'
                    >
                        <option value={true}>Disponible</option>
                        <option value={false}>No disponible</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Imagen</label>
                    <input
                        name="imagen_vehiculo"
                        value={car.imagen_vehiculo}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Kilometraje</label>
                    <input
                        name="kilometraje_vehiculo"
                        value={car.kilometraje_vehiculo}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        name="nombre_vehiculo"
                        value={car.nombre_vehiculo}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />
                </div>   

                <div className='mb-3'>
                    <label className='form-label'>Modelo</label>
                    <input
                        name="modelo_vehiculo"
                        value={car.modelo_vehiculo}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Transmisión</label>
                    <input
                        name="transmision_vehiculo"
                        value={car.transmision_vehiculo}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Rating</label>
                    <input
                        name="rating_vehiculo"
                        value={car.rating_vehiculo}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <textarea
                        name="descripcion_vehiculo"
                        value={car.descripcion_vehiculo}
                        onChange={handleInputChange} 
                        className='form-control'
                        required
                    />                 
                </div>  

                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input
                        name="precio_vehiculo"
                        value={car.precio_vehiculo}
                        onChange={handleInputChange} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                </div>

                <button type='submit' className='btn btn-primary'>Guardar Cambios</button>                  
            </form>
        </div>
    );
};

export default AdminEditCar;
