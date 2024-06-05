const mongoose = require('mongoose');

const productos = new mongoose.Schema({
    nombre_producto: String,
    cantidad_stock: Number,
    descripcion: String,
    imagen: String,
    marca: String,
    fecha_vencimiento: String,
    fecha_ingreso: String,
    categoria: String,
    oferta: Boolean,
    precio_oferta: Number,
    precio: Number
}); 

const Productos = mongoose.model('Productos', productos); 
//Lo que le dice "Del modelo de mongo pasalo a la variable Productos".

module.exports = Productos;