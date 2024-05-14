const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clientesController.js'); // Asegúrate de que la ruta sea correcta

// Obtener clientes
router.get('/', ClienteController.obtenerClientes);

router.get('/:cedula_cliente', ClienteController.ObetnerCliente);
// ObetnerClienterear un cliente
router.post('/', ClienteController.crearCliente);
router.put('/:cedula_cliente', ClienteController.actualizarCliente);
router.delete('/:cedula_cliente', ClienteController.eliminarCliente);

module.exports = router;
