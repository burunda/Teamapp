//importar express
//const express = require('express');
import Express from 'express';

const app = Express();
app.use(Express.json());

//configuraciones
app.set('port',process.env.PORT || 3000);

app.post("/ingresarvendedor",(req,res) =>{
    const datosVendedor = req.body;
    console.log('llaves', Object.keys(datosVendedor));
    try{
        if(
            Object.keys(datosVendedor).includes('idvendedor')&&
            Object.keys(datosVendedor).includes('nombre')&&
            Object.keys(datosVendedor).includes('apellido')&&
            Object.keys(datosVendedor).includes('email')&&
            Object.keys(datosVendedor).includes('edad')&&
            Object.keys(datosVendedor).includes('telefono')&&
            Object.keys(datosVendedor).includes('genero')&&
            Object.keys(datosVendedor).includes('marca')
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