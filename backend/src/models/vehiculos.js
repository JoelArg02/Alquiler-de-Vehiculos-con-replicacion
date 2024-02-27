const poolc = require('../config/db.js'); // Asegúrate de que la ruta sea correcta

const Vehiculo = {};

// Obtener todos los vehículos
Vehiculo.obtenerVehiculos = (callback) => {
  poolc.query('SELECT * FROM VEHICULO', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

// Crear un nuevo vehículo
Vehiculo.crearVehiculo = (idAgencia, tipoVehiculos, kilometraje, precio, disponibilidad, callback) => {
  poolc.query('INSERT INTO VEHICULO (ID_AGENCIA, TIPO_VEHICULOS, KILOMETRAJE_VEHICULO, PRECIO_VEHICULO, DISPONIBILIDAD_VEHICULO) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
  [idAgencia, tipoVehiculos, kilometraje, precio, disponibilidad], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows[0]);
    }
  });
};

// Actualizar un vehículo existente
Vehiculo.actualizarVehiculo = (idVehiculo, idAgencia, tipoVehiculos, kilometraje, precio, disponibilidad, callback) => {
  poolc.query('UPDATE VEHICULO SET ID_AGENCIA = $2, TIPO_VEHICULOS = $3, KILOMETRAJE_VEHICULO = $4, PRECIO_VEHICULO = $5, DISPONIBILIDAD_VEHICULO = $6 WHERE ID_VEHICULO = $1 RETURNING *', 
  [idVehiculo, idAgencia, tipoVehiculos, kilometraje, precio, disponibilidad], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows[0]);
    }
  });
};

// Eliminar un vehículo
Vehiculo.eliminarVehiculo = (idVehiculo, callback) => {
  poolc.query('DELETE FROM VEHICULO WHERE ID_VEHICULO = $1', [idVehiculo], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = Vehiculo;
