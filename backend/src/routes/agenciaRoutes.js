const express = require('express');
const router = express.Router();
const AgenciasController = require('../controllers/agenciasController.js');


// Obtener negocios
router.get('/', AgenciasController.obtenerAgencias);

// Crear un negocio

router.post('/', AgenciasController.crearAgencia);

// Actualizar negocio

router.put('/:id_agencia', AgenciasController.actualizarAgencia);

// Eliminar agencia

router.delete('/:id_agencia', AgenciasController.deleteAgencia);



module.exports = router;
