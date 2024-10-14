const mongoose = require('mongoose')

const dbConection = async ()=> {



    try {

        await mongoose.connect(process.env.DB_MONGO, {
            family: 4
        
        })

        console.log('BASE DE DATOS ONLINE')
  

        
    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar la base de datos')
    }

}






module.exports = {
    dbConection
}