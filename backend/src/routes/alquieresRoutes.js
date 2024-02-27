const express = require('express');
const router = express.Router();
const AlquilerController = require('../controllers/alquileresController.js'); // Asegúrate de que la ruta sea correcta

// Obtener alquileres
router.get('/', AlquilerController.obtenerAlquileres);

// Crear un alquiler
router.post('/', AlquilerController.crearAlquiler);

// Actualizar alquiler
router.put('/:id', AlquilerController.actualizarAlquiler);

// Eliminar alquiler
router.delete('/:id', AlquilerController.eliminarAlquiler);

module.exports = router;
