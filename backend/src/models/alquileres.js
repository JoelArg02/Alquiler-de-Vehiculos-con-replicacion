const poolc = require('../config/db.js'); // Asegúrate de que la ruta sea correcta

const Alquiler = {};

// Leer todos los alquileres
Alquiler.obtenerAlquileres = (callback) => {
  poolc.query('SELECT * FROM alquiler', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

// Crear un alquiler
Alquiler.crearAlquiler = (idVehiculo, cedulaCliente, fechaInicio, fechaFin, callback) => {
  poolc.query('INSERT INTO alquiler (id_vehiculo, cedula_cliente, fecha_inicio_alq, fecha_fin_alq) VALUES ($1, $2, $3, $4)', 
  [idVehiculo, cedulaCliente, fechaInicio, fechaFin], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Actualizar un alquiler
Alquiler.actualizarAlquiler = (idVehiculo, cedulaCliente, fechaInicio, fechaFin, callback) => {
  poolc.query('UPDATE alquiler SET fecha_inicio_alq = $3, fecha_fin_alq = $4 WHERE id_vehiculo = $1 AND cedula_cliente = $2', 
  [idVehiculo, cedulaCliente, fechaInicio, fechaFin], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Eliminar un alquiler
Alquiler.eliminarAlquiler = (idVehiculo, cedulaCliente, callback) => {
  poolc.query('DELETE FROM alquiler WHERE id_vehiculo = $1 AND cedula_cliente = $2', [idVehiculo, cedulaCliente], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = Alquiler;
