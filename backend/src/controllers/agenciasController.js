const Agencia = require("../models/agencias.js");

exports.obtenerAgencias = (req, res) => {
  Agencia.obtenerAgencia((err, Agencia) => {
    if (err) {
      console.error("Error al obtener las agencias:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(Agencia);
    }
  });
}

exports.crearAgencia = (req, res) => {
  const { nombre_agencia, ubicacion_agencia } = req.body;
  Agencia.crearAgencia(nombre_agencia, ubicacion_agencia, (err, Agencia) => {
    if (err) {
      console.error("Error al crear la agencia:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(Agencia);
    }
  });
}

exports.actualizarAgencia = (req, res) => {
  const { nombre_agencia, ubicacion_agencia } = req.body;
  Agencia.actualizarAgencia(nombre_agencia, ubicacion_agencia, (err, Agencia) => {
    if (err) {
      console.error("Error al actualizar la agencia:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(Agencia);
    }
  });
}

exports.deleteAgencia = (req, res) => {
  const { id_agencia } = req.body;
  Agencia.eliminarAgencia(id_agencia, (err, Agencia) => {
    if (err) {
      console.error("Error al eliminar la agencia:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(Agencia);
    }
  });
}