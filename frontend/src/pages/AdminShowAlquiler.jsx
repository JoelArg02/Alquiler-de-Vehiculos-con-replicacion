import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const URL = "http://localhost:5000/api/v1/alquiler";

const AdminEditReservation = () => {
  const [reservas, setReservas] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [reservaActual, setReservaActual] = useState(null);
  const [nuevaReserva, setNuevaReserva] = useState({
    id_alquiler: "",
    id_vehiculo: "",
    cedula_cliente: "",
    fecha_inicio_alq: "",
    fecha_fin_alq: "",
  });

  useEffect(() => {
    getReservas();
  }, []);

  const getReservas = async () => {
    try {
      const res = await axios.get(URL);
      setReservas(res.data);
    } catch (error) {
      console.error("Error al obtener las reservas:", error);
    }
  };

  const deleteReserva = async (id_alquiler) => {
    try {
      await axios.delete(`${URL}/${id_alquiler}`);
      getReservas();
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
    }
  };  

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const toggleModalCreate = () => {
    setModalCreate(!modalCreate);
  };

  const handleEdit = async (id_alquiler) => {
    try {
      const res = await axios.get(`${URL}/${id_alquiler}`);
      setReservaActual(res.data);
      toggleModalEdit();
    } catch (error) {
      console.error("Error al obtener la reserva para editar:", error);
    }
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setReservaActual((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeCreate = (e) => {
    const { name, value } = e.target;
    setNuevaReserva((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${reservaActual.id_alquiler}`, reservaActual);
      getReservas();
      toggleModalEdit();
    } catch (error) {
      console.error("Error al actualizar la reserva:", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, nuevaReserva);
      getReservas();
      toggleModalCreate();
      setNuevaReserva({
        id_alquiler: "",
        id_vehiculo: "",
        cedula_cliente: "",
        fecha_inicio_alq: "",
        fecha_fin_alq: "",
      });
    } catch (error) {
      console.error("Error al crear la reserva:", error);
    }
  };

  return (
    <div className="container">
      <Button color="primary" onClick={toggleModalCreate}>
        Crear Reserva
      </Button>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th>ID Alquiler</th>
            <th>ID Vehiculo</th>
            <th>Cédula Cliente</th>
            <th>Fecha Inicio Alquiler</th>
            <th>Fecha Fin Alquiler</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id_alquiler}>
              <td>{reserva.id_alquiler}</td>
              <td>{reserva.id_vehiculo}</td>
              <td>{reserva.cedula_cliente}</td>
              <td>{reserva.fecha_inicio_alq}</td>
              <td>{reserva.fecha_fin_alq}</td>
              <td>
                <Button color="info" onClick={() => handleEdit(reserva.id_alquiler)}>
                  Editar
                </Button>{" "}
                <Button color="danger" onClick={() => deleteReserva(reserva.id_alquiler)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para editar */}
      {reservaActual && (
        <Modal isOpen={modalEdit} toggle={toggleModalEdit}>
          <ModalHeader toggle={toggleModalEdit}>Editar Reserva</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="id_alquiler">ID Alquiler</Label>
              <Input
                type="text"
                name="id_alquiler"
                value={reservaActual.id_alquiler}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="id_vehiculo">ID Vehiculo</Label>
              <Input
                type="text"
                name="id_vehiculo"
                value={reservaActual.id_vehiculo}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cedula_cliente">Cédula Cliente</Label>
              <Input
                type="text"
                name="cedula_cliente"
                value={reservaActual.cedula_cliente}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="fecha_inicio_alq">Fecha Inicio Alquiler</Label>
              <Input
                type="text"
                name="fecha_inicio_alq"
                value={reservaActual.fecha_inicio_alq}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="fecha_fin_alq">Fecha Fin Alquiler</Label>
              <Input
                type="text"
                name="fecha_fin_alq"
                value={reservaActual.fecha_fin_alq}
                onChange={handleChangeEdit}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmitEdit}>
              Guardar Cambios
            </Button>{" "}
            <Button color="secondary" onClick={toggleModalEdit}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      )}

      {/* Modal para crear */}
      <Modal isOpen={modalCreate} toggle={toggleModalCreate}>
        <ModalHeader toggle={toggleModalCreate}>Crear Reserva</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="id_alquiler">ID Alquiler</Label>
            <Input
              type="text"
              name="id_alquiler"
              value={nuevaReserva.id_alquiler}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="id_vehiculo">ID Vehiculo</Label>
            <Input
              type="text"
              name="id_vehiculo"
              value={nuevaReserva.id_vehiculo}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="cedula_cliente">Cédula Cliente</Label>
            <Input
              type="text"
              name="cedula_cliente"
              value={nuevaReserva.cedula_cliente}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fecha_inicio_alq">Fecha Inicio Alquiler</Label>
            <Input
              type="text"
              name="fecha_inicio_alq"
              value={nuevaReserva.fecha_inicio_alq}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fecha_fin_alq">Fecha Fin Alquiler</Label>
            <Input
              type="text"
              name="fecha_fin_alq"
              value={nuevaReserva.fecha_fin_alq}
              onChange={handleChangeCreate}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmitCreate}>
            Crear
          </Button>{" "}
          <Button color="secondary" onClick={toggleModalCreate}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AdminEditReservation;
