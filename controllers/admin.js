const Productos = require('../models/product')




const verProductos = async (req, res) => {

    const products = await Productos.find({})
    // res.status(200).json({ products, numProducts: products.length })


    res.render('page/read', { products: products })
    // console.log(numProducts)
}; 

const agregarProductos = async (req, res) => {
    
     
    res.render('page/agregate', { messages: messages })

    // console.log(numProducts)
}



const enviarProducto = async (req, res) => {
    console.log('EnviarProductos funcionando')

    const nombreProducto = req.body.nombre_producto;
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const precio = req.body.precio;
    console.log(nombreProducto)
    // console.log(stock)
    // console.log(precioOferta)

    const agregateProduct = await Productos.insertMany({ nombre_producto: nombreProducto, marca: marca, categoria: categoria, precio: precio })
    // Agregar el mensaje flash
    
    // Redirigir a la página de administración de productos
    res.redirect('/admin/crud');
};



//UPDATE Y DELETE 
const eliminarProductos = async (req, res) => {

    console.log('Soy eliminarProducto')
    const idReq = { _id: req.params.id };

    let resultado = await Productos.deleteOne(idReq)


        .then(respuesta => {
            console.log('Producto eliminado')
            res.render('page/delete')
        })
        .catch(error => {
            console.log(error)
        })


}




const enviarProductoEditado = (req, res) => {

    console.log('Vamos a editar producto')
    const idReq = { _id: req.params.id } //lo guarda en la ruta get
    console.log(idReq) //mostrar el id en consola

    Productos.updateOne(idReq, {
        $set: {
            nombre_producto: req.body.nombre_producto,
            marca: req.body.marca,
            categoria: req.body.categoria,
            precio: req.body.precio
        }
    }) //busca el id especificamente 

        .then(respuesta => {
            console.log('Todo funciona bien', respuesta)
            res.render('page/exito')
        })

        .catch(error => {
            console.log(error)
        })

}



//GET
const productoActualizado = async (req, res) => {
    console.log('Hola soy productoActualizado')
    const idReq = { _id: req.params.id } //lo guarda en la ruta get
    let products = await Productos.findOne(idReq)
        .then(products => {

            res.render('page/update', { products: products })
            console.log('el resultado es', products)
        })
        .catch(error => {
            console.log(error)
        })





};

module.exports = {
    verProductos,
    agregarProductos,
    enviarProducto,
    eliminarProductos,
    enviarProductoEditado,
    productoActualizado
}