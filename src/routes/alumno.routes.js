const express = require('express');
const { crearAlumno, obtenerAlumno, eliminarAlumno, editarAlumno } = require('../controllers/alumnoControlers');
const router = express.Router()

router.get('/', obtenerAlumno )

router.post('/crear', crearAlumno)

router.post('/editar', editarAlumno)

router.get('/borrar/:id', eliminarAlumno)





module.exports = router;