import Express from 'express';

const app = Express();

app.get('/tablavendedores',(req,res) => {
    console.log('alguien entro a vendedores');
    // en lugar del mensaje vendedores no hay va consulta a la base 
    //da datos
    res.send('vendedores no hay');
});

app.listen(3000,() => {
    console.log ("escuchando en puerto 3000");
});