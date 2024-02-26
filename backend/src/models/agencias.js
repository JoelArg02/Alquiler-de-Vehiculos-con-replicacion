const poolc = require('../config/db.js'); // Asegúrate de que la ruta sea correcta

const Agencia = {};

Agencia.obtenerAgencia = (callback) => {
  poolc.query('SELECT * FROM agencia', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

Agencia.crearAgencia = (callback) => {
  poolc.query('INSERT INTO agencia (nombre_agencia, ubicacion_agencia) VALUES ($1, $2)', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });

}

Agencia.actualizarAgencia = (callback) => {
  poolc.query('UPDATE agencia SET nombre_agencia = $1, ubicacion_agencia = $2 WHERE id_agencia = $8', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

Agencia.eliminarAgencia = (callback) => {
  poolc.query('DELETE FROM agencia WHERE id_agencia = $1', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = Agencia;
