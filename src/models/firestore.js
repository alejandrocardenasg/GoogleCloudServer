const Firestore = require('@google-cloud/firestore');
const path = require('path');

//Formato fecha hora

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
        var date = new Date();
        var Fecha = date.getFullYear() + "-"+ (date.getMonth() + 1) + "-" + date.getDate();
        var Hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var Horario = Fecha + "-" + Hora;
        var nombre = datos.nombre;
        var archivo = (nombre + '-' + Horario).toString();
        const docRef = this.firestore.collection(collection).doc(archivo);
        await docRef.set(datos);
    }

}

module.exports = new FirestoreClient();

