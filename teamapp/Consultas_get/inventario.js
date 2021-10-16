
import Express from 'express';

const app = Express();

app.get('/inventario',(req,res) => {
    console.log('alguien entro a inventario');
    // en lugar del mensaje vehiculos no hay va consulta a la base 
    //da datos
    res.send('vehiculos no hay');
});

app.listen(5000,() => {
    console.log ("escuchando en puerto 5000");
});