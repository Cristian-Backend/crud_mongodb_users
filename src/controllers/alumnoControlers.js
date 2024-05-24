const Alumno = require('../model/Alumno')


const obtenerAlumno = async (req,res) => {
    const alumnos = await Alumno.find()


   res.render('index', {alumnos: alumnos})  // le pasamos el arreglo alumnos y se lo pasamos a tbody de tablasyo

}


const crearAlumno = async (req, res) => {
    try {
        // Extraer la información del cuerpo de la solicitud
        const { nombre, correo, edad } = req.body;

        // Validar que los campos no estén vacíos
        if (!nombre || !correo || !edad) {
            throw new Error('Todos los campos son obligatorios.');
        }

        // Crear una instancia del modelo Alumno con los datos proporcionados
        const alumno = new Alumno({ nombre, correo, edad });

        // Guardar el alumno en la base de datos
        await alumno.save();

        // Redirigir al usuario a la página principal
        res.redirect('/');
    } catch (error) {
        // Manejar errores
        console.error('Error al crear el alumno:', error.message);
        // Renderizar una página de error o redirigir a una página de error
        res.status(500).send('Error interno del servidor');
    }
}




    
    const eliminarAlumno = async (req, res) => {
        try {
            // Extraer el ID del parámetro de la solicitud
            const { id } = req.params;
    
            // Verificar si el ID proporcionado es válido
            if (!id) {
                throw new Error('ID de alumno no proporcionado.');
            }
    
            // Buscar y eliminar el alumno por su ID
            const alumnoEliminado = await Alumno.findByIdAndDelete(id);
    
            // Verificar si se encontró y eliminó el alumno
            if (!alumnoEliminado) {
                throw new Error('No se pudo encontrar el alumno para eliminar.');
            }
    
            // Redirigir al usuario a la página principal u otra página
            res.redirect('/');
        } catch (error) {
            // Manejar errores
            console.error('Error al eliminar el alumno:', error.message);
            // Renderizar una página de error o redirigir a una página de error
            res.status(500).send('Error interno del servidor');
        }
    }
    



module.exports = {
    crearAlumno,
    obtenerAlumno,
    eliminarAlumno
}