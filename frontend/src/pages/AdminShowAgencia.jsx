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

const URL = "http://localhost:5000/api/v1/agencias";

const AdminEditAgency = () => {
  const [agencias, setAgencias] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [agenciaActual, setAgenciaActual] = useState(null);
  const [nuevaAgencia, setNuevaAgencia] = useState({
    id_agencia: "",
    nombre_agencia: "",
    ubicacion_agencia: "",
  });

  useEffect(() => {
    getAgencias();
  }, []);

  const getAgencias = async () => {
    try {
      const res = await axios.get(URL);
      setAgencias(res.data);
    } catch (error) {
      console.error("Error al obtener las agencias:", error);
    }
  };

  const deleteAgencia = async (id_agencia) => {
    try {
      await axios.delete(`${URL}/${id_agencia}`);
      getAgencias();
    } catch (error) {
      console.error("Error al eliminar la agencia:", error);
    }
  };

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const toggleModalCreate = () => {
    setModalCreate(!modalCreate);
  };

  const handleEdit = async (id_agencia) => {
    try {
      console.log(id_agencia);
      const res = await axios.get(`${URL}/${id_agencia}`);
      setAgenciaActual(res.data);
      toggleModalEdit();
    } catch (error) {
      console.error("Error al obtener la agencia para editar:", error);
    }
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setAgenciaActual((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeCreate = (e) => {
    const { name, value } = e.target;
    setNuevaAgencia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${agenciaActual.id_agencia}`, agenciaActual);
      getAgencias();
      toggleModalEdit();
    } catch (error) {
      console.error("Error al actualizar la agencia:", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, nuevaAgencia);
      getAgencias();
      toggleModalCreate();
      setNuevaAgencia({
        id_agencia: "",
        nombre_agencia: "",
        ubicacion_agencia: "",
      });
    } catch (error) {
      console.error("Error al crear la agencia:", error);
    }
  };

  return (
    <div className="container">
      <Button color="primary" onClick={toggleModalCreate}>
        Crear Agencia
      </Button>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th>ID Agencia</th>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {agencias.map((agencia) => (
            <tr key={agencia.id_agencia}>
              <td>{agencia.id_agencia}</td>
              <td>{agencia.nombre_agencia}</td>
              <td>{agencia.ubicacion_agencia}</td>
              <td>
                <Button color="info" onClick={() => handleEdit(agencia.id_agencia)}>
                  Editar
                </Button>{" "}
                <Button color="danger" onClick={() => deleteAgencia(agencia.id_agencia)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para editar */}
      {agenciaActual && (
        <Modal isOpen={modalEdit} toggle={toggleModalEdit}>
          <ModalHeader toggle={toggleModalEdit}>Editar Agencia</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="id_agencia">ID Agencia</Label>
              <Input
                type="text"
                name="id_agencia"
                value={agenciaActual.id_agencia}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nombre_agencia">Nombre</Label>
              <Input
                type="text"
                name="nombre_agencia"
                value={agenciaActual.nombre_agencia}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ubicacion_agencia">Ubicación</Label>
              <Input
                type="text"
                name="ubicacion_agencia"
                value={agenciaActual.ubicacion_agencia}
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
        <ModalHeader toggle={toggleModalCreate}>Crear Agencia</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="id_agencia">ID Agencia</Label>
            <Input
              type="text"
              name="id_agencia"
              value={nuevaAgencia.id_agencia}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nombre_agencia">Nombre</Label>
            <Input
              type="text"
              name="nombre_agencia"
              value={nuevaAgencia.nombre_agencia}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ubicacion_agencia">Ubicación</Label>
            <Input
              type="text"
              name="ubicacion_agencia"
              value={nuevaAgencia.ubicacion_agencia}
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

export default AdminEditAgency;
