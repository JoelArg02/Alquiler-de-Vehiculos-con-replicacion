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
    idAgencia,
    tipoVehiculos,
    imagenVehiculo,
    kilometraje,
    nombreVehiculo,
    modeloVehiculo,
    transmisionVehiculo,
    ratingVehiculo,
    descripcionVehiculo,
    precio,
    disponibilidad,
  } = req.body;

  Vehiculo.actualizarVehiculo(
    id_vehiculo,
    idAgencia,
    tipoVehiculos,
    imagenVehiculo,
    kilometraje,
    nombreVehiculo,
    modeloVehiculo,
    transmisionVehiculo,
    ratingVehiculo,
    descripcionVehiculo,
    precio,
    disponibilidad,
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
