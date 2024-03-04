const poolc = require("../config/db.js"); // Asegúrate de que la ruta sea correcta

const Vehiculo = {};

// Obtener todos los vehículos
Vehiculo.obtenerVehiculos = (callback) => {
  poolc.query("SELECT * FROM VEHICULO", (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

Vehiculo.crearVehiculo = (
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
  callback
) => {
  poolc.query(
    "INSERT INTO VEHICULO (ID_AGENCIA, TIPO_VEHICULOS, IMAGEN_VEHICULO, KILOMETRAJE_VEHICULO, NOMBRE_VEHICULO, MODELO_VEHICULO, TRANSMISION_VEHICULO, RATING_VEHICULO, DESCRIPCION_VEHICULO, PRECIO_VEHICULO, DISPONIBILIDAD_VEHICULO) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
    [
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
    ],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.rows[0]);
      }
    }
  );
};


Vehiculo.actualizarVehiculo = (
  id_vehiculo, // Este es el ID del vehículo a actualizar.
  id_agencia,
  tipo_vehiculos,
  imagen_vehiculo,
  kilometraje_vehiculo,
  nombre_vehiculo,
  modelo_vehiculo,
  transmision_vehiculo,
  rating_vehiculo,
  descripcion_vehiculo,
  precio_vehiculo,
  disponibilidad_vehiculo,
  callback // Función de callback para manejar la respuesta.
) => {
  poolc.query(
    "UPDATE VEHICULO SET ID_AGENCIA = $2, TIPO_VEHICULOS = $3, IMAGEN_VEHICULO = $4, KILOMETRAJE_VEHICULO = $5, NOMBRE_VEHICULO = $6, MODELO_VEHICULO = $7, TRANSMISION_VEHICULO = $8, RATING_VEHICULO = $9, DESCRIPCION_VEHICULO = $10, PRECIO_VEHICULO = $11, DISPONIBILIDAD_VEHICULO = $12 WHERE ID_VEHICULO = $1 RETURNING *;",
    [
      id_vehiculo,
      id_agencia,
      tipo_vehiculos,
      imagen_vehiculo,
      kilometraje_vehiculo,
      nombre_vehiculo,
      modelo_vehiculo,
      transmision_vehiculo,
      rating_vehiculo,
      descripcion_vehiculo,
      precio_vehiculo,
      disponibilidad_vehiculo,
    ],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.rows[0]); // Retorna el vehículo actualizado.
      }
    }
  );
};

// Eliminar un vehículo
Vehiculo.eliminarVehiculo = (idVehiculo, callback) => {
  poolc.query(
    "DELETE FROM VEHICULO WHERE ID_VEHICULO = $1",
    [idVehiculo],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

module.exports = Vehiculo;
