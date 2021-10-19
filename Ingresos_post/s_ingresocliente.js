//importar express
//const express = require('express');
import Express from 'express';
import {MongoClient} from 'mongodb';

const stringconexion=
"mongodb+srv://Senkuprogrammeuse:Senku17Team@minticconcesionarioteam.pqncy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(stringconexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let conexion;

const app = Express();
app.use(Express.json());

//configuraciones
//app.set('port',process.env.PORT || 3000);

app.post("/ingresarcliente",(req,res) =>{
    const datosClientes = req.body;
    console.log('llaves', Object.keys(datosClientes));
    try{
        if(
            Object.keys(datosClientes).includes('idcliente')&&
            Object.keys(datosClientes).includes('nombre')&&
            Object.keys(datosClientes).includes('apellido')&&
            Object.keys(datosClientes).includes('email')&&
            Object.keys(datosClientes).includes('edad')&&
            Object.keys(datosClientes).includes('telefono')&&
            Object.keys(datosClientes).includes('genero')&&
            Object.keys(datosClientes).includes('marca')
        ) {
                //implementar codigo para cliente vendedor BD
                conexion.collection('clientes').insertOne(datosClientes, (err,result) =>{
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