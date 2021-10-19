//importar express
//const express = require('express');
import Express from 'express';
import {MongoClient} from 'mongodb';

const stringconexion=
"mongodb+srv://Senkuprogrammeuse:Senku17@minticconcesionarioteam.pqncy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(stringconexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let conexion;

const app = Express();
app.use(Express.json());

//configuraciones
//app.set('port',process.env.PORT || 3000);

app.post("/ingresarvehiculo",(req,res) =>{
    const datosVehiculo = req.body;
    console.log('llaves', Object.keys(datosVehiculo));
    try{
        if(
            Object.keys(datosVehiculo).includes('idconcesionario')&&
            Object.keys(datosVehiculo).includes('idvehiculo')&&
            Object.keys(datosVehiculo).includes('fechacompra')&&
            Object.keys(datosVehiculo).includes('nombreVehiculo')&&
            Object.keys(datosVehiculo).includes('marca')&&
            Object.keys(datosVehiculo).includes('modelo')&&
            Object.keys(datosVehiculo).includes('costo')&&
            Object.keys(datosVehiculo).includes('proveedor')
        ) {
                //implementar codigo para crear vendedor BD
                conexion.collection('vehiculos').insertOne(datosVehiculo, (err,result) =>{
                    if (err){
                        console.error(err);
                        res.sendStatus(500);
                    }else {
                        console.log(result);
                        res.sendStatus(200)
                    }
                });             
        }else {
        res.sendStatus(500);
        }
    } catch{
        res.sendStatus(500);
    }
});

const main = () =>{
    client.connect((err,db)=>{
        
        if (err){
            //throw err;
            console.error('Error conectando a la base de datos');
        }   
        conexion= db.db('teamapp');
        console.log('conexion exitosa');
        return app.listen(3000,() => {
            console.log ("escuchando en puerto 3000");
        });
    });
};

main();