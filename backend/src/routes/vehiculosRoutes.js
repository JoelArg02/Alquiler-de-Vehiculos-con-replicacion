const express = require('express');
const router = express.Router();
const VehiculoController = require('../controllers/vehiculosController.js'); // Asegúrate de que la ruta sea correcta

// Obtener vehículos
router.get('/', VehiculoController.obtenerVehiculos);

// Crear un vehículo
router.post('/', VehiculoController.crearVehiculo);

// Actualizar vehículo
router.put('/:id', VehiculoController.actualizarVehiculo);

// Eliminar vehículo
router.delete('/:id', VehiculoController.eliminarVehiculo);

module.exports = router;
