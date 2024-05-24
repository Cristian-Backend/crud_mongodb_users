const express = require('express');
const { crearAlumno, obtenerAlumno, eliminarAlumno } = require('../controllers/alumnoControlers');
const router = express.Router()

router.get('/', obtenerAlumno )

router.post('/crear', crearAlumno)

router.get('/borrar/:id', eliminarAlumno)





module.exports = router;