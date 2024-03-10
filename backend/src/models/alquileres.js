const poolc = require("../config/db.js"); // Asegúrate de que la ruta sea correcta

const Alquiler = {};

// Leer todos los alquileres
Alquiler.obtenerAlquileres = (callback) => {
  poolc.query("SELECT A.ID_ALQUILER,V.NOMBRE_VEHICULO,A.CEDULA_CLIENTE,A.FECHA_INICIO_ALQ,A.FECHA_FIN_ALQ FROM ALQUILER A JOIN VEHICULO V ON A.ID_VEHICULO = V.ID_VEHICULO;", (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};


Alquiler.obtenerAlquilerPorId = (id_alquiler, callback) => {
  poolc.query(
    "SELECT * FROM alquiler WHERE id_alquiler = $1",
    [id_alquiler],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.rows[0]); // Suponiendo que solo hay un registro para cada id_alquiler
      }
    }
  );
};

// Crear un alquiler
Alquiler.crearAlquiler = (
  id_alquiler,
  id_vehiculo,
  cedula_cliente,
  fecha_inicio_alq,
  fecha_fin_alq,
  callback
) => {
  poolc.query(
    "INSERT INTO alquiler (id_alquiler, id_vehiculo, cedula_cliente, fecha_inicio_alq, fecha_fin_alq) VALUES ($1, $2, $3, $4, $5)",
    [id_alquiler, id_vehiculo, cedula_cliente, fecha_inicio_alq, fecha_fin_alq],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

// Actualizar un alquiler
Alquiler.actualizarAlquiler = (
  id_alquiler,
  id_vehiculo,
  cedula_cliente,
  fecha_inicio_alq,
  fecha_fin_alq,
  callback
) => {
  poolc.query(
    "UPDATE alquiler SET id_vehiculo = $2, cedula_cliente = $3, fecha_inicio_alq = $4, fecha_fin_alq = $5 WHERE id_alquiler = $1 RETURNING *",
    [id_alquiler, id_vehiculo, cedula_cliente, fecha_inicio_alq, fecha_fin_alq],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.rows[0]);
      }
    }
  );
};

// Eliminar un alquiler
Alquiler.eliminarAlquiler = (id_alquiler, callback) => {
  poolc.query(
    "DELETE FROM alquiler WHERE id_alquiler = $1",
    [id_alquiler],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

module.exports = Alquiler;
