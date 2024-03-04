const poolc = require('../config/db.js'); 

const Cliente = {};

Cliente.obtenerClientes = (callback) => {
  poolc.query('SELECT * FROM CLIENTE', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

Cliente.crearCliente = (cedula, nombres, apellidos, telefono, direccion, correo, callback) => {
  poolc.query('INSERT INTO CLIENTE (CEDULA_CLIENTE, NOMBRES_CLIENTE, APELLIDOS_CLIENTE, TELEFONO_CLIENTE, DIRECCION_CLIENTE, CORREO_CLIENTE) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [cedula, nombres, apellidos, telefono, direccion, correo], (err, results) => {
      if (err) {
        if (typeof callback === 'function') {
          callback(err, null);
        } else {
          console.error('Se esperaba un callback pero no se proporcionó uno o no es una función.');
        }
      } else {
        if (typeof callback === 'function') {
          callback(null, results.rows[0]);
        } else {
          console.log('Operación exitosa, pero el manejo del callback no es posible porque no se proporcionó una función.');
        }
      }
  });
};



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
