const Alquiler = require("../models/alquileres.js"); // Asegúrate de que la ruta sea correcta

exports.obtenerAlquileres = (req, res) => {
  Alquiler.obtenerAlquileres((err, alquileres) => {
    if (err) {
      console.error("Error al obtener los alquileres:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(alquileres);
    }
  });
};

exports.obtenerAlquiler = (req, res) => {
  const { id_vehiculo, cedula_cliente } = req.params; // Asume que recibirás estos parámetros en la URL

  Alquiler.obtenerAlquilerPorId(id_vehiculo, cedula_cliente, (err, alquiler) => {
    if (err) {
      console.error("Error al obtener el alquiler:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else if (!alquiler) {
      res.status(404).json({ error: "Alquiler no encontrado" });
    } else {
      res.json(alquiler);
    }
  });
};

exports.crearAlquiler = (req, res) => {
  const { idVehiculo, cedulaCliente, fechaInicio, fechaFin } = req.body;
  Alquiler.crearAlquiler(
    idVehiculo,
    cedulaCliente,
    fechaInicio,
    fechaFin,
    (err, alquiler) => {
      if (err) {
        console.error("Error al crear el alquiler:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.json(alquiler);
      }
    }
  );
};

exports.actualizarAlquiler = (req, res) => {
  const { idVehiculo, cedulaCliente, fechaInicio, fechaFin } = req.body;
  Alquiler.actualizarAlquiler(
    idVehiculo,
    cedulaCliente,
    fechaInicio,
    fechaFin,
    (err, alquiler) => {
      if (err) {
        console.error("Error al actualizar el alquiler:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.json(alquiler);
      }
    }
  );
};

exports.eliminarAlquiler = (req, res) => {
  const { idVehiculo, cedulaCliente } = req.body;
  Alquiler.eliminarAlquiler(idVehiculo, cedulaCliente, (err, alquiler) => {
    if (err) {
      console.error("Error al eliminar el alquiler:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(alquiler);
    }
  });
};
