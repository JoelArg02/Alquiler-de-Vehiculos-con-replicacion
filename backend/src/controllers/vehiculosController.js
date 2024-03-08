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

exports.obtenerVehiculo = (req, res) => {
  const { id_vehiculo } = req.params; 

  Vehiculo.obtenerVehiculo(id_vehiculo, (err, vehiculos) => {
    if (err) {
      console.error("Error al obtener el vehículo:", err);
      
      if (err.code) {
        switch (err.code) {
          case "22P02": 
            return res.status(400).json({ error: "Formato de ID de vehículo inválido." });
          default:
            return res.status(500).json({ error: "Error interno del servidor." });
        }
      } else {
        return res.status(500).json({ error: "Error interno del servidor." });
      }
    } else if (vehiculos.length === 0) {
      return res.status(404).json({ error: "Vehículo no encontrado." });
    } else {
      res.json(vehiculos[0]); 
    }
  });
};


exports.crearVehiculo = (req, res) => {
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
    disponibilidad_vehiculo,
  } = req.body;

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
    disponibilidad_vehiculo,
    (err, vehiculo) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).json(vehiculo);
    }
  );
};

exports.actualizarVehiculo = (req, res) => {
  const { id_vehiculo } = req.params;
  console.log("id_vehiculo", id_vehiculo);
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
    disponibilidad_vehiculo,
  } = req.body;

  Vehiculo.actualizarVehiculo(
    id_vehiculo,
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
        console.error("Error al actualizar el vehículo:", err);

        // Publicar el mensaje de error detallado para el cliente, asegurándose de no exponer detalles sensibles
        let errorMessage = "Ocurrió un error al procesar la solicitud.";
        // Personaliza el mensaje de error basado en el entorno de ejecución
        if (process.env.NODE_ENV === "development") {
          // En entorno de desarrollo, puede ser útil ver el mensaje exacto del error
          errorMessage += ` Detalle: ${err.message}`;
        } else {
          // En producción, evita enviar mensajes de error detallados que pueden revelar la lógica interna
          errorMessage +=
            " Por favor, revise los datos enviados o intente más tarde.";
        }

        return res.status(500).json({ error: errorMessage });
      }

      if (!vehiculoActualizado) {
        return res.status(404).json({ error: "Vehículo no encontrado." });
      }

      res.status(200).json(vehiculoActualizado);
    }
  );
};


exports.eliminarVehiculo = (req, res) => {
  const { id_vehiculo } = req.params;
  console.log("id_vehiculo", id_vehiculo);
  
  Vehiculo.eliminarVehiculo(id_vehiculo, (err, vehiculo) => {
    if (err) {
      console.error("Error al eliminar el vehículo:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(vehiculo);
    }
  });
};
