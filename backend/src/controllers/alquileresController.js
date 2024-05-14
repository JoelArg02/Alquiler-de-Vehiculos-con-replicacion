const Alquiler = require("../models/alquileres.js");

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
  const { id_alquiler } = req.params;
  console.log(id_alquiler);
  Alquiler.obtenerAlquilerPorId(id_alquiler, (err, alquiler) => {
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
  const { id_alquiler, id_vehiculo, cedula_cliente, fecha_inicio_alq, fecha_fin_alq } = req.body;
  Alquiler.crearAlquiler(
    id_alquiler,
    id_vehiculo,
    cedula_cliente,
    fecha_inicio_alq,
    fecha_fin_alq,
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
  const { id_alquiler } = req.params;
  const { id_vehiculo, cedula_cliente, fecha_inicio_alq, fecha_fin_alq } = req.body;
  Alquiler.actualizarAlquiler(
    id_alquiler,
    id_vehiculo,
    cedula_cliente,
    fecha_inicio_alq,
    fecha_fin_alq,
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
  const { id_alquiler} = req.params;
  Alquiler.eliminarAlquiler(id_alquiler, (err, alquiler) => {
    if (err) {
      console.error("Error al eliminar el alquiler:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(alquiler);
    }
  });
};