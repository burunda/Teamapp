import Express from 'express';

const app = Express();

app.get('/tablaventas',(req,res) => {
    console.log('alguien entro a ventas');
    // en lugar del mensaje ventas no hay va consulta a la base 
    //da datos
    res.send('ventas no hay');
});

app.listen(3000,() => {
    console.log ("escuchando en puerto 3000");
});