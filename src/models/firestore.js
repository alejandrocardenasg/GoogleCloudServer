const Firestore = require('@google-cloud/firestore');
const path = require('path');

//Formato fecha hora
const date = new Date();
const Fecha = date.getFullYear() + "-"+ (date.getMonth() + 1) + "-" + date.getDate();
const Hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
const Horario = Fecha + "-" + Hora;

// Firestore
class FirestoreClient{
    constructor(){
        this.firestore = new Firestore(
            {
                projectId: 'base-de-datos-309115',
                keyFilename: path.join(__dirname, './base-de-datos-309115-25951b1bb641.json')

            });
    }

    async guardar(collection,datos){
        const nombre = datos.nombre;
        const archivo = (nombre + '-' + Horario).toString();
        const docRef = this.firestore.collection(collection).doc(archivo);
        await docRef.set(datos);
    }

}

module.exports = new FirestoreClient();

