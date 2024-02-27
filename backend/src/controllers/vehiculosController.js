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
  const { id_agencia, tipo_vehiculos, kilometraje_vehiculo, precio_vehiculo, disponibilidad_vehiculo } = req.body;
  Vehiculo.crearVehiculo(id_agencia, tipo_vehiculos, kilometraje_vehiculo, precio_vehiculo, disponibilidad_vehiculo, (err, vehiculo) => {
    if (err) {
      console.error("Error al crear el vehículo:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(vehiculo);
    }
  });
}

exports.actualizarVehiculo = (req, res) => {
  const { id_vehiculo, id_agencia, tipo_vehiculos, kilometraje_vehiculo, precio_vehiculo, disponibilidad_vehiculo } = req.body;
  Vehiculo.actualizarVehiculo(id_vehiculo, id_agencia, tipo_vehiculos, kilometraje_vehiculo, precio_vehiculo, disponibilidad_vehiculo, (err, vehiculo) => {
    if (err) {
      console.error("Error al actualizar el vehículo:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(vehiculo);
    }
  });
}

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
