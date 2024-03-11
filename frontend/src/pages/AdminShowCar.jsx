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
  Col,
  Row,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const URL = "http://localhost:5000/api/v1/vehiculos/";

const AdminEditCar = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [vehiculoActual, setVehiculoActual] = useState(null);
  const [nuevoVehiculo, setNuevoVehiculo] = useState({
    id_agencia: "",
    tipo_vehiculo: "",
    imagen_vehiculo: "",
    kilometraje_vehiculo: "",
    nombre_vehiculo: "",
    modelo_vehiculo: "",
    transmision_vehiculo: "",
    rating_vehiculo: "",
    descripcion_vehiculo: "",
    precio_vehiculo: "",
    disponibilidad_vehiculo: false,
  });

  const [vehiculosFiltrados, setVehiculosFiltrados] = useState([]);

  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [vehiculosPorPagina] = useState(10);

  useEffect(() => {
    getVehiculos();
  }, []);

  const getVehiculos = async () => {
    try {
      const res = await axios.get(URL);
      setVehiculos(res.data);
    } catch (error) {
      console.error("Error al obtener los vehiculos:", error);
    }
  };

  const deleteVehiculos = async (id_vehiculo) => {
    try {
      await axios.delete(`${URL}${id_vehiculo}`);
      getVehiculos();
    } catch (error) {
      console.error("Error al eliminar el vehiculo:", error);
    }
  };

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const toggleModalCreate = () => {
    setModalCreate(!modalCreate);
  };

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const res = await axios.get(URL);
        setVehiculos(res.data);
        setVehiculosFiltrados(res.data);
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
    };
    fetchVehiculos();
  }, []);

  const filtrarVehiculos = (texto) => {
    setFiltro(texto);
    const filtrados = vehiculos.filter(
      (vehiculo) =>
        vehiculo.nombre_vehiculo.toLowerCase().includes(texto.toLowerCase())
      // Puedes agregar más campos para el filtro aquí
    );
    setVehiculosFiltrados(filtrados);
    setPaginaActual(1); // Resetear a la primera página al filtrar
  };

  const vehiculosVisibles = () => {
    const inicio = (paginaActual - 1) * vehiculosPorPagina;
    const fin = inicio + vehiculosPorPagina;
    return vehiculosFiltrados.slice(inicio, fin);
  };

  const totalPaginas = Math.ceil(
    vehiculosFiltrados.length / vehiculosPorPagina
  );

  const handleEdit = async (id_vehiculo) => {
    try {
      console.log(id_vehiculo); // Asegúrate de que esto imprime el ID correcto
      const res = await axios.get(`${URL}${id_vehiculo}`);
      setVehiculoActual(res.data);
      toggleModalEdit();
    } catch (error) {
      console.error("Error al obtener el vehiculo para editar:", error);
    }
  };

  const handleChangeEdit = (e) => {
    const { name, value, type, checked } = e.target;
    setVehiculoActual((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleChangeCreate = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoVehiculo((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}${vehiculoActual.id_vehiculo}`, vehiculoActual);
      getVehiculos();
      toggleModalEdit();
    } catch (error) {
      console.error("Error al actualizar el vehiculo:", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, nuevoVehiculo);
      getVehiculos();
      toggleModalCreate();
      setNuevoVehiculo({
        id_agencia: "",
        tipo_vehiculo: "",
        imagen_vehiculo: "",
        kilometraje_vehiculo: "",
        nombre_vehiculo: "",
        modelo_vehiculo: "",
        transmision_vehiculo: "",
        rating_vehiculo: "",
        descripcion_vehiculo: "",
        precio_vehiculo: "",
        disponibilidad_vehiculo: false,
      });
    } catch (error) {
      console.error("Error al crear el vehiculo:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Button color="primary" onClick={toggleModalCreate}>
            Crear Vehículo
          </Button>
          <Input
            type="text"
            placeholder="Filtrar vehículos..."
            value={filtro}
            onChange={(e) => filtrarVehiculos(e.target.value)}
            className="my-3"
          />
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Agencia</th>
                <th>Tipo</th>
                <th>Imagen</th>
                <th>Kilometraje</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Transmisión</th>
                <th>Rating</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Disponibilidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {vehiculosVisibles().map((vehiculo) => (
                <tr key={vehiculo.id_vehiculo}>
                  <td>{vehiculo.nombre_agencia}</td>
                  <td>{vehiculo.tipo_vehiculo}</td>
                  <td>{vehiculo.imagen_vehiculo}</td>
                  <td>{vehiculo.kilometraje_vehiculo}</td>
                  <td>{vehiculo.nombre_vehiculo}</td>
                  <td>{vehiculo.modelo_vehiculo}</td>
                  <td>{vehiculo.transmision_vehiculo}</td>
                  <td>{vehiculo.rating_vehiculo}</td>
                  <td>{vehiculo.descripcion_vehiculo}</td>
                  <td>{vehiculo.precio_vehiculo}</td>
                  <td>{vehiculo.disponibilidad_vehiculo ? "Sí" : "No"}</td>
                  <td>
                    <Button
                      color="info"
                      onClick={() => handleEdit(vehiculo.id_vehiculo)}
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      color="danger"
                      onClick={() => deleteVehiculos(vehiculo.id_vehiculo)}
                    >
                      Eliminar Vehiculo
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination>
            <PaginationItem disabled={paginaActual <= 1}>
              <PaginationLink
                previous
                onClick={() => setPaginaActual(paginaActual - 1)}
              />
            </PaginationItem>
            {[...Array(totalPaginas)].map((_, i) => (
              <PaginationItem active={i + 1 === paginaActual} key={i}>
                <PaginationLink onClick={() => setPaginaActual(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem disabled={paginaActual >= totalPaginas}>
              <PaginationLink
                next
                onClick={() => setPaginaActual(paginaActual + 1)}
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>

      {/* Modal para editar */}
      {vehiculoActual && (
        <Modal isOpen={modalEdit} toggle={toggleModalEdit}>
          <ModalHeader toggle={toggleModalEdit}>Editar Vehículo</ModalHeader>
          <ModalBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="id_agencia">ID Agencia</Label>
                  <Input
                    type="text"
                    name="id_agencia"
                    value={vehiculoActual.id_agencia}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="tipo_vehiculo">Tipo de Vehículo</Label>
                  <Input
                    type="select"
                    name="tipo_vehiculo"
                    value={vehiculoActual.tipo_vehiculo}
                    onChange={handleChangeEdit}
                  >
                    <option value="">Selecciona un tipo de vehículo</option>
                    <option value="SUV">SUV</option>
                    <option value="Jeep">Jeep</option>
                    <option value="Camioneta">Camioneta</option>
                    <option value="Deportivo">Deportivo</option>
                    <option value="Compacto">Compacto</option>
                    <option value="Sedán">Sedán</option>
                    <option value="Furgoneta">Furgoneta</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="imagen_vehiculo">Imagen del Vehículo (URL)</Label>
                  <Input
                    type="text"
                    name="imagen_vehiculo"
                    value={vehiculoActual.imagen_vehiculo}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="kilometraje_vehiculo">Kilometraje</Label>
                  <Input
                    type="number"
                    name="kilometraje_vehiculo"
                    value={vehiculoActual.kilometraje_vehiculo}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="descripcion_vehiculo">Descripción</Label>
                  <Input
                    type="textarea"
                    name="descripcion_vehiculo"
                    value={vehiculoActual.descripcion_vehiculo}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="nombre_vehiculo">Nombre</Label>
                  <Input
                    type="text"
                    name="nombre_vehiculo"
                    value={vehiculoActual.nombre_vehiculo}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="modelo_vehiculo">Modelo</Label>
                  <Input
                    type="text"
                    name="modelo_vehiculo"
                    value={vehiculoActual.modelo_vehiculo}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="transmision_vehiculo">Transmisión</Label>
                  <Input
                    type="select"
                    name="transmision_vehiculo"
                    value={vehiculoActual.transmision_vehiculo}
                    onChange={handleChangeEdit}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Automática">Automática</option>
                    <option value="Manual">Manual</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="rating_vehiculo">Rating</Label>
                  <Input
                    type="number"
                    name="rating_vehiculo"
                    value={vehiculoActual.rating_vehiculo}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="precio_vehiculo">Precio</Label>
                  <Input
                    type="number"
                    name="precio_vehiculo"
                    value={vehiculoActual.precio_vehiculo}
                    onChange={handleChangeEdit}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="disponibilidad_vehiculo"
                      checked={vehiculoActual.disponibilidad_vehiculo}
                      onChange={handleChangeEdit}
                    />{" "}
                    Disponibilidad
                  </Label>
                </FormGroup>
              </Col>
            </Row>
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
        <ModalHeader toggle={toggleModalCreate}>Crear Vehículo</ModalHeader>
        <ModalBody>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="id_agencia">ID Agencia</Label>
                <Input
                  type="text"
                  name="id_agencia"
                  id="id_agencia"
                  value={nuevoVehiculo.id_agencia}
                  onChange={handleChangeCreate}
                />
              </FormGroup>
              <FormGroup>
                <Label for="tipo_vehiculo">Tipo de Vehículo</Label>
                <Input
                  type="select"
                  name="tipo_vehiculo"
                  id="tipo_vehiculo"
                  value={nuevoVehiculo.tipo_vehiculo}
                  onChange={handleChangeCreate}
                >
                  <option value="">Selecciona un tipo de vehículo</option>
                  <option value="SUV">SUV</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Camioneta">Camioneta</option>
                  <option value="Deportivo">Deportivo</option>
                  <option value="Compacto">Compacto</option>
                  <option value="Sedán">Sedán</option>
                  <option value="Furgoneta">Furgoneta</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="transmision_vehiculo">Transmisión</Label>
                <Input
                  type="select"
                  name="transmision_vehiculo"
                  id="transmision_vehiculo"
                  value={nuevoVehiculo.transmision_vehiculo}
                  onChange={handleChangeCreate}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Automática">Automática</option>
                  <option value="Manual">Manual</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="rating_vehiculo">Rating</Label>
                <Input
                  type="number"
                  name="rating_vehiculo"
                  id="rating_vehiculo"
                  value={nuevoVehiculo.rating_vehiculo}
                  onChange={handleChangeCreate}
                />
              </FormGroup>
              <FormGroup>
                <Label for="descripcion_vehiculo">Descripción</Label>
                <Input
                  type="textarea"
                  name="descripcion_vehiculo"
                  id="descripcion_vehiculo"
                  value={nuevoVehiculo.descripcion_vehiculo}
                  onChange={handleChangeCreate}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="imagen_vehiculo">Imagen del Vehículo (URL)</Label>
                <Input
                  type="text"
                  name="imagen_vehiculo"
                  id="imagen_vehiculo"
                  value={nuevoVehiculo.imagen_vehiculo}
                  onChange={handleChangeCreate}
                />
              </FormGroup>
              <FormGroup>
                <Label for="kilometraje_vehiculo">Kilometraje</Label>
                <Input
                  type="number"
                  name="kilometraje_vehiculo"
                  id="kilometraje_vehiculo"
                  value={nuevoVehiculo.kilometraje_vehiculo}
                  onChange={handleChangeCreate}
                />
              </FormGroup>
              <FormGroup>
                <Label for="nombre_vehiculo">Nombre</Label>
                <Input
                  type="text"
                  name="nombre_vehiculo"
                  id="nombre_vehiculo"
                  value={nuevoVehiculo.nombre_vehiculo}
                  onChange={handleChangeCreate}
                />
              </FormGroup>
              <FormGroup>
                <Label for="modelo_vehiculo">Modelo</Label>
                <Input
                  type="text"
                  name="modelo_vehiculo"
                  id="modelo_vehiculo"
                  value={nuevoVehiculo.modelo_vehiculo}
                  onChange={handleChangeCreate}
                />
              </FormGroup>

              <FormGroup>
                <Label for="precio_vehiculo">Precio</Label>
                <Input
                  type="number"
                  name="precio_vehiculo"
                  id="precio_vehiculo"
                  value={nuevoVehiculo.precio_vehiculo}
                  onChange={handleChangeCreate}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="disponibilidad_vehiculo"
                    id="disponibilidad_vehiculo"
                    checked={nuevoVehiculo.disponibilidad_vehiculo}
                    onChange={handleChangeCreate}
                  />{" "}
                  Disponibilidad
                </Label>
              </FormGroup>
            </Col>
          </Row>
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

export default AdminEditCar;
