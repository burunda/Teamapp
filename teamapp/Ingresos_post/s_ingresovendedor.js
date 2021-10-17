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
                conexion.collection('vendedores').insertOne(datosVendedor, (err,result) =>{
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