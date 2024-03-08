const express = require('express');
const router = express.Router();
const AlquilerController = require('../controllers/alquileresController.js'); // Asegúrate de que la ruta sea correcta

// Obtener alquileres
router.get('/', AlquilerController.obtenerAlquileres);

// Obtener alquiler por id
router.get('/alquiler/:id_vehiculo/:cedula_cliente', AlquilerController.obtenerAlquiler);
// Crear un alquiler
router.post('/', AlquilerController.crearAlquiler);

// Actualizar alquiler
router.put('/:id', AlquilerController.actualizarAlquiler);

// Eliminar alquiler
router.delete('/:id', AlquilerController.eliminarAlquiler);

module.exports = router;
