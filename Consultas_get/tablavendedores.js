
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

app.get('/tablavendedores',(req,res) => {
    console.log('alguien entro a vendedores');
    // en lugar del mensaje vendedores no hay va consulta a la base 
    //da datos
    conexion.collection('vendedores').find({}).limit(10).toArray((err,result) => {
        if (err){
            res.status(500).send('Error en la consulta de los vendedores');
        }else{
            res.json(result);
        }
    });
});

const main = () =>{
    client.connect((err,db)=>{
        
        if (err){
            //throw err;
            console.error('Error conectando a la base de datos');
        }   
        conexion= db.db('teamapp');
        console.log('conexion exitosa');
        return app.listen(5000,() => {
            console.log ("escuchando en puerto 5000");
        });
    });
};

main();