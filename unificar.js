
require('dotenv').config()

const connectDB = require('./config/connectDB');

const Productos =require('./models/product')

const jsonProduct=require('./datos.json')

const iniciar=async()=>{
    try{
        await connectDB(process.env.MONGO_URL);  // Usa la URI de entorno o la predeterminada


            //await Product.deleteMany()
            //await Product.updateMany([{},{},{}])
           await Productos.create(jsonProduct)
            console.log('SE EFECTO EL CAMBIO')
    }
    catch(error){
        console.log(error)
    }
}

iniciar()