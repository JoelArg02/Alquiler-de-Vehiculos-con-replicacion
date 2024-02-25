const express = require('express');
const router = express.Router();
const AgenciasController = require('../controllers/agenciasController.js');


// Obtener negocios
router.get('/', AgenciasController.getBusiness);

// Crear un negocio

router.post('/create', AgenciasController.createBusiness);

// Actualizar negocio

router.put('/update/:id', AgenciasController.updateBusiness);

module.exports = router;
