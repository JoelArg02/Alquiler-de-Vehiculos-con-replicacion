const poolc = require("../config/db.js"); // Asegúrate de que la ruta sea correcta

const Agencia = {};

Agencia.obtenerAgencia = (callback) => {
  poolc.query("SELECT * FROM agencia", (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

Agencia.obtenerAgenciaPorId = (id_agencia, callback) => {
  poolc.query(
    "SELECT * FROM agencia WHERE id_agencia = $1",
    [id_agencia], 
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.rows);
      }
    }
  );
};

Agencia.crearAgencia = (nombreAgencia, ubicacionAgencia, callback) => {
  poolc.query(
    "INSERT INTO agencia (nombre_agencia, ubicacion_agencia) VALUES ($1, $2) RETURNING *",
    [nombreAgencia, ubicacionAgencia],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        // Asumiendo que quieres devolver la agencia recién creada
        callback(null, results.rows[0]);
      }
    }
  );
};

Agencia.actualizarAgencia = (
  idAgencia,
  nombreAgencia,
  ubicacionAgencia,
  callback
) => {
  poolc.query(
    "UPDATE agencia SET nombre_agencia = $2, ubicacion_agencia = $3 WHERE id_agencia = $1 RETURNING *",
    [idAgencia, nombreAgencia, ubicacionAgencia],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.rows[0]); // Asumiendo que quieres devolver la agencia actualizada
      }
    }
  );
};
Agencia.eliminarAgencia = (idAgencia, callback) => {
  poolc.query(
    "DELETE FROM agencia WHERE id_agencia = $1 RETURNING *",
    [idAgencia],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        // Devuelve la confirmación de la agencia eliminada
        callback(null, results.rowCount > 0 ? results.rows[0] : null);
      }
    }
  );
};

module.exports = Agencia;
