const express = require('express');
const path = require('path');
const morgan = require('morgan');

//Inicializando express
const App = express();

//Importar rutas

const indexRoutes = require('./routes/index.js');
const { prototype } = require('events');

//Configuración

App.set('port', process.env.PORT || 5555);

//middlewares

App.use(morgan('dev'));
App.use(express.urlencoded({extended:false}));

// Rutas

App.use('/',indexRoutes);

//Servidor

App.listen(App.get('port'),()=>{
    console.log("Escuchando por el puerto ", App.get('port'));
})


