const Vehiculo = require("../models/vehiculos.js"); // Asegúrate de que la ruta al modelo sea correcta

exports.obtenerVehiculos = (req, res) => {
  Vehiculo.obtenerVehiculos((err, vehiculos) => {
    if (err) {
      console.error("Error al obtener los vehículos:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(vehiculos);
    }
  });
};

exports.crearVehiculo = (req, res) => {
  const disponibilidad_Vehiculo = req.body.disponibilidadVehiculo === "true";
  const {
    id_agencia,
    tipo_vehiculo,
    imagen_vehiculo,
    kilometraje_vehiculo,
    nombre_vehiculo,
    modelo_vehiculo,
    transmision_vehiculo,
    rating_vehiculo,
    descripcion_vehiculo,
    precio_vehiculo,
  } = req.body;

  // Ahora pasa disponibilidad_Vehiculo en lugar de disponibilidad_vehiculo
  Vehiculo.crearVehiculo(
    id_agencia,
    tipo_vehiculo,
    imagen_vehiculo,
    kilometraje_vehiculo,
    nombre_vehiculo,
    modelo_vehiculo,
    transmision_vehiculo,
    rating_vehiculo,
    descripcion_vehiculo,
    precio_vehiculo,
    disponibilidad_Vehiculo,
    (err, vehiculo) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).json(vehiculo);
    }
  );
};

exports.actualizarVehiculo = (req, res) => {
  const { id } = req.params;
  let {
    id_agencia,
    tipo_vehiculo,
    imagen_vehiculo,
    kilometraje_vehiculo,
    nombre_vehiculo,
    modelo_vehiculo,
    transmision_vehiculo,
    rating_vehiculo,
    descripcion_vehiculo,
    precio_vehiculo,
    disponibilidad_vehiculo,
  } = req.body;

  // Asegurándose de que disponibilidad_vehiculo sea un booleano
  disponibilidad_vehiculo = disponibilidad_vehiculo === 'true' || disponibilidad_vehiculo === true;

  Vehiculo.actualizarVehiculo(
    id,
    id_agencia,
    tipo_vehiculo,
    imagen_vehiculo,
    kilometraje_vehiculo,
    nombre_vehiculo,
    modelo_vehiculo,
    transmision_vehiculo,
    rating_vehiculo,
    descripcion_vehiculo,
    precio_vehiculo,
    disponibilidad_vehiculo,
    (err, vehiculoActualizado) => {
      if (err) {
        return res.status(500).send({ message: 'Error al actualizar el vehículo', error: err });
      }
      res.status(200).json(vehiculoActualizado);
    }
  );
};


exports.eliminarVehiculo = (req, res) => {
  const { id_vehiculo } = req.body;
  Vehiculo.eliminarVehiculo(id_vehiculo, (err, vehiculo) => {
    if (err) {
      console.error("Error al eliminar el vehículo:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(vehiculo);
    }
  });
};
