const express=require('express');
const router=express.Router(); //Función proporcionada por Express que nos permite crear un nuevo objeto de enrutador 
//permitiendo que las rutas se manejen de manera modular y separada del archivo principal de la aplicación app.js
const{obtenerTodosLosProductos, obtenerPreciosPorMayor, buscarPorAmbientadores, buscarPorHigiene, buscarPorLimpiezaIndustrial, buscarPorLimpiezaHogar, carritoDeCompras}=require('../controllers/products') 





//rutas        -      controlador, controlar que pasara cuando ingresemos a shop 
router.route('/shop').get(obtenerTodosLosProductos)
//pepe.com/productos/shop

//Carrito de compra
router.route('/carrito/:id').get(carritoDeCompras)





router.route('/preciomayor').get(obtenerPreciosPorMayor)


router.route('/ambientadores').get(buscarPorAmbientadores)
router.route('/higienepersonal').get(buscarPorHigiene)
router.route('/limpiezaindustrial').get(buscarPorLimpiezaIndustrial)
router.route('/limpiezadelhogar').get(buscarPorLimpiezaHogar)


module.exports=router