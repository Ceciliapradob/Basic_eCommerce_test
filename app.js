const express = require('express');
const session = require('express-session')
const app = express();
// const session = require('express-session');
// const bodyParser = require('body-parser'); 
// const mongoose = require('mongoose');  
require('dotenv').config()
const connectDB = require('./config/connectDB');
const productsRouter = require('./routes/products');

const adminRouter = require('./routes/admin'); 




//midleware
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())




app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true
}));



//Rutas GET: 
app.get('/', (req, res) => {
    res.render('home')
}); 


app.get('/about', (req, res) => {
    res.render('page/about')

}); 

app.get('/contact', (req, res) => {
    res.render('page/contact')
}); 

app.get('/login', (req, res) => {
    res.render('page/login')
});

app.get('/register', (req, res) => {
    res.render('page/register')
});


app.use('/productos', productsRouter); 

app.use('/admin', adminRouter); 

// app.use('/productos/categorias')




const iniciar=async ()=>{
    try{
       await connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT,console.log('el servidor se inicio en el puerto' ))
    }catch(error){
        console.log(error)
    }

}

iniciar()
