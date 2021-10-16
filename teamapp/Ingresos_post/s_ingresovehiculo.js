//importar express
//const express = require('express');
import Express from 'express';

const app = Express();
app.use(Express.json());

//configuraciones
app.set('port',process.env.PORT || 3000);

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
            res.sendStatus(200);            
        }else {
        res.sendStatus(500);
        }
    } catch{
        res.sendStatus(500);
    }
});

app.listen(app.get('port'),() => {
    console.log ("escuchando en puerto 3000");
});