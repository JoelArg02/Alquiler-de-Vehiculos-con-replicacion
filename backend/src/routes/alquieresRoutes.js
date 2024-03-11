const express = require('express');
const router = express.Router();
const AlquilerController = require('../controllers/alquileresController.js'); // Asegúrate de que la ruta sea correcta

// Obtener alquileres
router.get('/', AlquilerController.obtenerAlquileres);

// Obtener alquiler por id
router.get('/:id_alquiler', AlquilerController.obtenerAlquiler);
// Crear un alquiler
router.post('/', AlquilerController.crearAlquiler);

// Actualizar alquiler
router.put('/:id_alquiler', AlquilerController.actualizarAlquiler);

// Eliminar alquiler
router.delete('/:id_alquiler', AlquilerController.eliminarAlquiler);

module.exports = router;
