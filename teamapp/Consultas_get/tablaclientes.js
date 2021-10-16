import Express from 'express';

const app = Express();

app.get('/tablaclientes',(req,res) => {
    console.log('alguien entro a clientes');
    // en lugar del mensaje clientes no hay va consulta a la base 
    //da datos
    res.send('clientes no hay');
});

app.listen(3000,() => {
    console.log ("escuchando en puerto 3000");
});