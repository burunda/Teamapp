//importar express
//const express = require('express');
import Express from 'express';

const app = Express();
app.use(Express.json());

//configuraciones
app.set('port',process.env.PORT || 3000);

app.post("/ingresarventa",(req,res) =>{
    const datosVentas = req.body;
    console.log('llaves', Object.keys(datosVentas));
    try{
        if(
            Object.keys(datosVentas).includes('idconcesionario')&&
            Object.keys(datosVentas).includes('idvehiculo')&&
            Object.keys(datosVentas).includes('fechaVenta')&&
            Object.keys(datosVentas).includes('nombreVehiculo')&&
            Object.keys(datosVentas).includes('marca')&&
            Object.keys(datosVentas).includes('modelo')&&
            Object.keys(datosVentas).includes('precio')
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