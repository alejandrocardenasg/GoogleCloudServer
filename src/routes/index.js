const express = require('express');
const router = express.Router();
const FirestoreClient = require('../models/firestore.js');

//RUTAS

router.get('/', (req,res)=> {
    res.send('Esta es la página principal');
});

const dato = {
    nombre: 'Andres Villaloba',
    identificacion: '1.193.439.772',
    luz: [10,11,12,13,14]
};

router.get('/add', async (req,res) =>{
    const guardar = async()=>{
        await FirestoreClient.guardar('usuarios', dato);
    }
    guardar();
    if(guardar){
    res.send('Los datos han sido insertados');
    }
});

module.exports = router;