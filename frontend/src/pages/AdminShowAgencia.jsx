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
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const URL = "http://localhost:5000/api/v1/agencias";

const AdminEditAgency = () => {
  const [todasLasAgencias, setTodasLasAgencias] = useState([]);
  const [agenciasPaginadas, setAgenciasPaginadas] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [agenciaActual, setAgenciaActual] = useState({
    id_agencia: "",
    nombre_agencia: "",
    ubicacion_agencia: "",
  });
  const [nuevaAgencia, setNuevaAgencia] = useState({
    id_agencia: "",
    nombre_agencia: "",
    ubicacion_agencia: "",
  });
  const [paginaActual, setPaginaActual] = useState(1);
  const [agenciasPorPagina] = useState(10);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchAgencias = async () => {
      try {
        const res = await axios.get(URL);
        setTodasLasAgencias(res.data);
        filtrarYpaginarAgencias(res.data, filtro);
      } catch (error) {
        console.error("Error al obtener las agencias:", error);
      }
    };
    fetchAgencias();
  }, []);

  useEffect(() => {
    filtrarYpaginarAgencias(todasLasAgencias, filtro);
  }, [paginaActual, filtro, todasLasAgencias]);

  const filtrarYpaginarAgencias = (agencias, filtro) => {
    let agenciasFiltradas = filtro
      ? agencias.filter((agencia) =>
          agencia.nombre_agencia.toLowerCase().includes(filtro.toLowerCase())
        )
      : agencias;

    const totalDeAgenciasFiltradas = agenciasFiltradas.length;
    const totalDePaginasCalculadas = Math.ceil(
      totalDeAgenciasFiltradas / agenciasPorPagina
    );
    setTotalPaginas(totalDePaginasCalculadas);

    const inicio = (paginaActual - 1) * agenciasPorPagina;
    const fin = inicio + agenciasPorPagina;
    agenciasFiltradas = agenciasFiltradas.slice(inicio, fin);

    setAgenciasPaginadas(agenciasFiltradas);
  };

  const toggleModalEdit = () => setModalEdit(!modalEdit);

  const toggleModalCreate = () => setModalCreate(!modalCreate);

  const handleEdit = (agencia) => {
    setAgenciaActual(agencia);
    toggleModalEdit();
  };

  const deleteAgencia = async (id_agencia) => {
    try {
      await axios.delete(`${URL}/${id_agencia}`);
      const agenciasActualizadas = todasLasAgencias.filter(
        (agencia) => agencia.id_agencia !== id_agencia
      );
      setTodasLasAgencias(agenciasActualizadas);
      filtrarYpaginarAgencias(agenciasActualizadas, filtro);
    } catch (error) {
      console.error("Error al eliminar la agencia:", error);
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
      toggleModalEdit();
      setPaginaActual(1);
      filtrarYpaginarAgencias(todasLasAgencias, filtro);
    } catch (error) {
      console.error("Error al actualizar la agencia:", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, nuevaAgencia);
      toggleModalCreate();
      setNuevaAgencia({
        id_agencia: "",
        nombre_agencia: "",
        ubicacion_agencia: "",
      });
      setPaginaActual(1);
      filtrarYpaginarAgencias([...todasLasAgencias, nuevaAgencia], filtro);
    } catch (error) {
      console.error("Error al crear la agencia:", error);
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBlock: "40px" }}
    >
      {" "}
      {/* Estilo en línea añadido aquí */}
      <FormGroup>
        <Label for="filtro">Filtrar por nombre:</Label>
        <Input
          type="text"
          name="filtro"
          id="filtro"
          placeholder="Escribe para filtrar..."
          value={filtro}
          onChange={(e) => {
            setFiltro(e.target.value);
            setPaginaActual(1);
          }}
        />
      </FormGroup>
      <Button color="primary" onClick={toggleModalCreate}>
        Crear Agencia
      </Button>
      <table className="table">
        <thead>
          <tr>
            <th>ID Agencia</th>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {agenciasPaginadas.map((agencia) => (
            <tr key={agencia.id_agencia}>
              <td>{agencia.id_agencia}</td>
              <td>{agencia.nombre_agencia}</td>
              <td>{agencia.ubicacion_agencia}</td>
              <td>
                <Button color="info" onClick={() => handleEdit(agencia)}>
                  Editar
                </Button>{" "}
                <Button
                  color="danger"
                  onClick={() => deleteAgencia(agencia.id_agencia)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <Pagination>
          <PaginationItem disabled={paginaActual <= 1}>
            <PaginationLink
              previous
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPaginaActual(Math.max(1, paginaActual - 1));
              }}
            />
          </PaginationItem>
          {/* Opcional: Para mostrar números de página */}
          {[...Array(totalPaginas).keys()].map((n) => (
            <PaginationItem active={n + 1 === paginaActual} key={n}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPaginaActual(n + 1);
                }}
              >
                {n + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={paginaActual >= totalPaginas}>
            <PaginationLink
              next
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPaginaActual(paginaActual + 1);
              }}
            />
          </PaginationItem>
        </Pagination>
      </div>
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
