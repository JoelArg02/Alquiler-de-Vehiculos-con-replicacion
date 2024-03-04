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
}

exports.crearVehiculo = (req, res) => {
  const { id_agencia, tipo_vehiculo, imagen_vehiculo, kilometraje_vehiculo, nombre_vehiculo, modelo_vehiculo, transmision_vehiculo, rating_vehiculo, descripcion_vehiculo, precio_vehiculo, disponibilidad_vehiculo } = req.body;

  Vehiculo.crearVehiculo(id_agencia, tipo_vehiculo, imagen_vehiculo, kilometraje_vehiculo, nombre_vehiculo, modelo_vehiculo, transmision_vehiculo, rating_vehiculo, descripcion_vehiculo, precio_vehiculo, disponibilidad_vehiculo, (err, vehiculo) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json(vehiculo);
  });
};

// Controlador para actualizar un vehículo
exports.actualizarVehiculo = (req, res) => {
  const { idVehiculo } = req.params; // Asumiendo que el ID del vehículo viene como parámetro de la ruta
  const { idAgencia, tipoVehiculos, imagenVehiculo, kilometraje, nombreVehiculo, modeloVehiculo, transmisionVehiculo, ratingVehiculo, descripcionVehiculo, precio, disponibilidad } = req.body;

  Vehiculo.actualizarVehiculo(idVehiculo, idAgencia, tipoVehiculos, imagenVehiculo, kilometraje, nombreVehiculo, modeloVehiculo, transmisionVehiculo, ratingVehiculo, descripcionVehiculo, precio, disponibilidad, (err, vehiculoActualizado) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(vehiculoActualizado);
  });
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
}
