const Productos = require('../models/product')

const obtenerTodosLosProductos = async (req, res) => {
    const products = await Productos.find({})
    // res.status(200).json({ products, numProducts: products.length })

    console.log('Todo ok')
    res.render('page/shop', {products: products})
    // console.log(numProducts)
}


//Carrito de compras 
const carritoDeCompras = async (req, res) => {
    console.log('Esta funcion muestra el carrito');

    const idReq = { _id: req.params.id }; // lo guarda en la ruta get
    let product = await Productos.findOne(idReq)
        .then(product => {
            res.render('page/carrito', { product });
            console.log('el resultado es', product);
        })
        .catch(error => {
            console.log(error);
        });
};





const obtenerPreciosPorMayor = async (req, res) => {
    try {
        const productosPorPrecio = await Productos.find({}).sort({ precio_oferta: -1 }).select('nombre_producto precio_oferta');;
        res.status(200).json({ productosPorPrecio, numProducts: productosPorPrecio.length });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
}

//Funciones por categorias:


const buscarPorAmbientadores = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Ambientadores' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error(`Error al obtener productos de la categoría ${categoria}:`, error);
        res.status(500).json({ error: `Error al obtener productos de la categoría ${categoria}` });
    }
}
const buscarPorHigiene = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Higiene Personal' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error(`Error al obtener productos de la categoría ${categoria}:`, error);
        res.status(500).json({ error: `Error al obtener productos de la categoría ${categoria}` });
    }

}
const buscarPorLimpiezaIndustrial = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Limpieza Industrial' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error(`Error al obtener productos de la categoría ${categoria}:`, error);
        res.status(500).json({ error: `Error al obtener productos de la categoría ${categoria}` });
    }
}
const buscarPorLimpiezaHogar = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Limpieza del Hogar' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error(`Error al obtener productos de la categoría ${categoria}:`, error);
        res.status(500).json({ error: `Error al obtener productos de la categoría ${categoria}` });
    }

}

//-----------------------------------------SIGUIENTE


module.exports = {
    obtenerTodosLosProductos,
    obtenerPreciosPorMayor, 
    buscarPorAmbientadores,
    buscarPorHigiene,
    buscarPorLimpiezaIndustrial,
    buscarPorLimpiezaHogar,
    carritoDeCompras
}