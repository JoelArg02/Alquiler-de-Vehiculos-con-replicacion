const poolc = require('../config/db.js'); // Asegúrate de que la ruta sea correcta

const Cliente = {};

// Obtener todos los clientes
Cliente.obtenerClientes = (callback) => {
  poolc.query('SELECT * FROM CLIENTE', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

// Crear un nuevo cliente
Cliente.crearCliente = (nombres, apellidos, telefono, direccion, correo, callback) => {
  poolc.query('INSERT INTO CLIENTE (NOMBRES_CLIENTE, APELLIDOS_CLIENTE, TELEFONO_CLIENTE, DIRECCION_CLIENTE, CORREO_CLIENTE) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
  [nombres, apellidos, telefono, direccion, correo], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows[0]);
    }
  });
};

// Actualizar un cliente existente
Cliente.actualizarCliente = (cedulaCliente, nombres, apellidos, telefono, direccion, correo, callback) => {
  poolc.query('UPDATE CLIENTE SET NOMBRES_CLIENTE = $2, APELLIDOS_CLIENTE = $3, TELEFONO_CLIENTE = $4, DIRECCION_CLIENTE = $5, CORREO_CLIENTE = $6 WHERE CEDULA_CLIENTE = $1 RETURNING *', 
  [cedulaCliente, nombres, apellidos, telefono, direccion, correo], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows[0]);
    }
  });
};

// Eliminar un cliente
Cliente.eliminarCliente = (cedulaCliente, callback) => {
  poolc.query('DELETE FROM CLIENTE WHERE CEDULA_CLIENTE = $1', [cedulaCliente], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = Cliente;
