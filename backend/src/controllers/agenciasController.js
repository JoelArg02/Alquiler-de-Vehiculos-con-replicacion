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
};

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
};

exports.actualizarAgencia = (req, res) => {
  const { id_agencia } = req.params;
  const { nombre_agencia, ubicacion_agencia } = req.body;

  Agencia.actualizarAgencia(
    id_agencia,
    nombre_agencia,
    ubicacion_agencia,
    (err, agenciaActualizada) => {
      if (err) {
        console.error("Error al actualizar la agencia:", err);

        let errorMessage = "Ocurrió un error al procesar la solicitud.";
        if (process.env.NODE_ENV === "development") {
          errorMessage += ` Detalle: ${err.message}`;
        } else {
          errorMessage +=
            " Por favor, revise los datos enviados o intente más tarde.";
        }

        return res.status(500).json({ error: errorMessage });
      }

      if (!agenciaActualizada) {
        return res.status(404).json({ error: "Agencia no encontrada." });
      }

      res.status(200).json(agenciaActualizada);
    }
  );
};

exports.deleteAgencia = (req, res) => {
  const { id_agencia } = req.params;

  Agencia.eliminarAgencia(id_agencia, (err, agenciaEliminada) => {
    if (err) {
      console.error("Error al eliminar la agencia:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else if (!agenciaEliminada) {
      // Si no se encontró la agencia o no se eliminó ninguna fila
      res.status(404).json({ error: "Agencia no encontrada." });
    } else {
      // Devuelve la confirmación de la agencia eliminada
      res.status(200).json(agenciaEliminada);
    }
  });
};
