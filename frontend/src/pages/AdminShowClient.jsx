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

const URL = "http://localhost:5000/api/v1/clientes";

const AdminEditClient = () => {
  const [clientes, setClientes] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [clienteActual, setClienteActual] = useState(null);
  const [nuevoCliente, setNuevoCliente] = useState({
    cedula_cliente: "",
    nombres_cliente: "",
    apellidos_cliente: "",
    telefono_cliente: "",
    direccion_cliente: "",
    correo_cliente: "",
  });

  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    try {
      const res = await axios.get(URL);
      setClientes(res.data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  };

  const deleteCliente = async (cedula) => {
    try {
        await axios.delete(`${URL}/${cedula}`);
        getClientes();
    } catch (error) {
        console.error("Error al eliminar el cliente:", error);
    }
    };


  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const toggleModalCreate = () => {
    setModalCreate(!modalCreate);
    };

  const handleEdit = async (cedula) => {
    try {
      console.log(cedula); // Asegúrate de que esto imprime la cédula correcta
      const res = await axios.get(`${URL}/${cedula}`);
      setClienteActual(res.data);
      toggleModalEdit();
    } catch (error) {
      console.error("Error al obtener el cliente para editar:", error);
    }
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setClienteActual((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeCreate = (e) => {
    const { name, value } = e.target;
    setNuevoCliente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${clienteActual.cedula_cliente}`, clienteActual);
      getClientes();
      toggleModalEdit();
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, nuevoCliente);
      getClientes();
      toggleModalCreate();
      setNuevoCliente({
        cedula_cliente: "",
        nombres_cliente: "",
        apellidos_cliente: "",
        telefono_cliente: "",
        direccion_cliente: "",
        correo_cliente: "",
      });
    } catch (error) {
      console.error("Error al crear el cliente:", error);
    }
  };

  return (
    <div className="container">
      <Button color="primary" onClick={toggleModalCreate}>
        Crear Cliente
      </Button>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th>Cédula</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.cedula_cliente}>
              <td>{cliente.cedula_cliente}</td>
              <td>{cliente.nombres_cliente}</td>
              <td>{cliente.apellidos_cliente}</td>
              <td>{cliente.telefono_cliente}</td>
              <td>{cliente.direccion_cliente}</td>
              <td>{cliente.correo_cliente}</td>
              <td>
                <Button color="info" onClick={() => handleEdit(cliente.cedula_cliente)}>
                  Editar
                </Button>{" "}
                <Button color="danger" onClick={() => deleteCliente(cliente.cedula_cliente)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para editar */}
      {clienteActual && (
        <Modal isOpen={modalEdit} toggle={toggleModalEdit}>
          <ModalHeader toggle={toggleModalEdit}>Editar Cliente</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="cedula_cliente">Cédula</Label>
              <Input
                type="text"
                name="cedula_cliente"
                value={clienteActual.cedula_cliente}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nombres">Nombres</Label>
              <Input
                type="text"
                name="nombres_cliente"
                value={clienteActual.nombres_cliente}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="apellidos">Apellidos</Label>
              <Input
                type="text"
                name="apellidos_cliente"
                value={clienteActual.apellidos_cliente}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="telefono">Teléfono</Label>
              <Input
                type="text"
                name="telefono_cliente"
                value={clienteActual.telefono_cliente}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="direccion">Dirección</Label>
              <Input
                type="text"
                name="direccion_cliente"
                value={clienteActual.direccion_cliente}
                onChange={handleChangeEdit}
              />
            </FormGroup>
            <FormGroup>
              <Label for="correo">Correo</Label>
              <Input
                type="text"
                name="correo_cliente"
                value={clienteActual.correo_cliente}
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
        <ModalHeader toggle={toggleModalCreate}>Crear Cliente</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="cedula">Cédula</Label>
            <Input
              type="text"
              name="cedula_cliente"
              id="cedula"
              value={nuevoCliente.cedula_cliente}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nombres">Nombres</Label>
            <Input
              type="text"
              name="nombres_cliente"
              id="nombres"
              value={nuevoCliente.nombres_cliente}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="apellidos">Apellidos</Label>
            <Input
              type="text"
              name="apellidos_cliente"
              id="apellidos"
              value={nuevoCliente.apellidos_cliente}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="telefono">Teléfono</Label>
            <Input
              type="text"
              name="telefono_cliente"
              id="telefono"
              value={nuevoCliente.telefono_cliente}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="direccion">Dirección</Label>
            <Input
              type="text"
              name="direccion_cliente"
              id="direccion"
              value={nuevoCliente.direccion_cliente}
              onChange={handleChangeCreate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="correo">Correo</Label>
            <Input
              type="text"
              name="correo_cliente"
              id="correo"
              value={nuevoCliente.correo_cliente}
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

export default AdminEditClient;
