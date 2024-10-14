const express = require('express')
require('dotenv').config()
const path = require('path');

const  {dbConection} = require('./database/db')
const AlumnoRoutes = require('../src/routes/alumno.routes')

const app = express()

app.set('views', path.join(__dirname, 'views')); // Ajusta la ruta de las vistas
app.use(express.static(path.join(__dirname, 'public')));



app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(express.static('public'))



// rutas

app.use('/', AlumnoRoutes)



app.listen(3000,()=> {
    dbConection()
    console.log('Escuchando en el puerto',3000)
})


