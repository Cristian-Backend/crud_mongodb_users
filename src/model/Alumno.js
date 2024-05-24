const {model, Schema} = require('mongoose')

const alumnoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'] // si no coloco el nombre, se lanza ese mensaje.
    },

    correo: {
        type: String,
    },

    edad: {
        type: Number
    }



})


module.exports = model('Alumno',  alumnoSchema);