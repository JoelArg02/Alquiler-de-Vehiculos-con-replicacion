import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:5000/api/v1/vehiculos";


const AdminShowCar = () => {
  const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        getVehiculos();
    }, []);

    // Procedimiento para mostrar todos los vehiculos
    const getVehiculos = async () => {
        try {
            const res = await axios.get(URL);
            setVehiculos(res.data);
        } catch (error) {
            console.error("Error al obtener los vehiculos:", error);
        }
    };

    // Procedimiento para eliminar un útil
    const deleteVehiculos = async (id) => {
        try {
            await axios.delete(`${URL}/${id}`);
            getVehiculos();
        } catch (error) {
            console.error("Error al eliminar el vehiculo:", error);
        }
    };


  
  return (
    <div className='container'>
            <div className='row'>
                <div className='col'>
                <Link to="/adminCreateCar" className='btn btn-success mt-2 mb-2'>Ingresar nuevo vehículo</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Modelo</th>
                                <th>Rating</th>
                                <th>Precio</th>
                                <th>Age</th>
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
                                    <td>{vehiculo.id_agencia}</td>
                                    <td>{vehiculo.disponibilidad_vehiculo ? 'Disponible' : 'No disponible'}</td>

                                    <td>
                                        <Link to={`/adminViewCar/${vehiculo.id_vehiculo}`} className='btn btn-info me-2'><i className="fas fa-eye"></i> Ver</Link>
                                        <Link to={`/adminEditCar/${vehiculo.id_vehiculo}`} className='btn btn-warning me-2'><i className="fas fa-edit"></i> Editar</Link>
                                        <button onClick={() => deleteVehiculos(vehiculo.id_vehiculo)} className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
};

export default AdminShowCar;
