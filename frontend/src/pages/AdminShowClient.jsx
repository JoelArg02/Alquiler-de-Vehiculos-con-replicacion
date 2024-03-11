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
  Pagination,
  PaginationItem,
  PaginationLink,
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

  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  // Agregamos estados para el filtro y paginación
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [clientesPorPagina] = useState(2);
  useEffect(() => {
    getClientes();
  }, []);

  useEffect(() => {
    setClientesFiltrados(clientes);
  }, [clientes]);

  const getClientes = async () => {
    try {
      const res = await axios.get(URL);
      setClientes(res.data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  };
  const filtrarClientes = (e) => {
    const textoFiltro = e.target.value;
    setFiltro(textoFiltro);
    if (textoFiltro !== "") {
      const resultadosFiltro = clientes.filter(
        (cliente) =>
          cliente.nombres_cliente
            .toLowerCase()
            .includes(textoFiltro.toLowerCase()) ||
          cliente.apellidos_cliente
            .toLowerCase()
            .includes(textoFiltro.toLowerCase())
        // Puedes añadir más campos por los que filtrar
      );
      setClientesFiltrados(resultadosFiltro);
    } else {
      setClientesFiltrados(clientes);
    }
    setPaginaActual(1);
  };

  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

  // Calculamos los clientes para la página actual
  const indexDelUltimoCliente = paginaActual * clientesPorPagina;
  const indexDelPrimerCliente = indexDelUltimoCliente - clientesPorPagina;
  const clientesActuales = clientesFiltrados.slice(
    indexDelPrimerCliente,
    indexDelUltimoCliente
  );

  // Calculamos el número total de páginas
  const numeroPaginas = Math.ceil(clientesFiltrados.length / clientesPorPagina);

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
      <Input
        type="text"
        placeholder="Buscar clientes..."
        value={filtro}
        onChange={filtrarClientes}
        className="my-3"
      />
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
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.cedula_cliente}>
              <td>{cliente.cedula_cliente}</td>
              <td>{cliente.nombres_cliente}</td>
              <td>{cliente.apellidos_cliente}</td>
              <td>{cliente.telefono_cliente}</td>
              <td>{cliente.direccion_cliente}</td>
              <td>{cliente.correo_cliente}</td>
              <td>
                <Button
                  color="info"
                  onClick={() => handleEdit(cliente.cedula_cliente)}
                >
                  Editar
                </Button>{" "}
                <Button
                  color="danger"
                  onClick={() => deleteCliente(cliente.cedula_cliente)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination>
        <PaginationItem disabled={paginaActual <= 1}>
          <PaginationLink first onClick={() => paginar(1)} />
        </PaginationItem>
        <PaginationItem disabled={paginaActual <= 1}>
          <PaginationLink previous onClick={() => paginar(paginaActual - 1)} />
        </PaginationItem>
        {[...Array(numeroPaginas)].map((_, i) => (
          <PaginationItem active={i + 1 === paginaActual} key={i}>
            <PaginationLink onClick={() => paginar(i + 1)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={paginaActual >= numeroPaginas}>
          <PaginationLink next onClick={() => paginar(paginaActual + 1)} />
        </PaginationItem>
        <PaginationItem disabled={paginaActual >= numeroPaginas}>
          <PaginationLink last onClick={() => paginar(numeroPaginas)} />
        </PaginationItem>
      </Pagination>
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
