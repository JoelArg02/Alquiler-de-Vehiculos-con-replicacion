const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clientesController.js'); // Asegúrate de que la ruta sea correcta

// Obtener clientes
router.get('/', ClienteController.obtenerClientes);

// Crear un cliente
router.post('/', ClienteController.crearCliente);

// Actualizar cliente
router.put('/:id', ClienteController.actualizarCliente);

// Eliminar cliente
router.delete('/:id', ClienteController.eliminarCliente);

module.exports = router;
