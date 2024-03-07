const express = require('express');
const router = express.Router();
const VehiculoController = require('../controllers/vehiculosController.js'); // Asegúrate de que la ruta sea correcta

// Obtener vehículos
router.get('/', VehiculoController.obtenerVehiculos);

// Actualizar vehículo
router.get('/:id_vehiculo', VehiculoController.obtenerVehiculo);

// Crear un vehículo
router.post('/', VehiculoController.crearVehiculo);

// Actualizar vehículo
router.put('/:id_vehiculo', VehiculoController.actualizarVehiculo);

// Eliminar vehículo
router.delete('/:id_vehiculo', VehiculoController.eliminarVehiculo);

module.exports = router;
