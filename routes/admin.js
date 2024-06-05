const express=require('express')
const router=express.Router()
const {verProductos, agregarProductos, enviarProducto, enviarProductoEditado, eliminarProductos, productoActualizado} = require('../controllers/admin'); 


//BLOQUEAR PAGINAS
router.route('/crud').get(verProductos); //read 
router.route('/agregate').get(agregarProductos) //create
router.route('/nuevoproducto').post(enviarProducto);  //create 


router.route('/updateproducto/:id').post(enviarProductoEditado); 
router.route('/productoactual/:id').get(productoActualizado)



router.route('/delete/:id').post(eliminarProductos) //este todavia no

//CRUD create read update delete




module.exports=router