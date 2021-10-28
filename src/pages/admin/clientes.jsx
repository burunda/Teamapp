import { Link } from "react-router-dom";


function Clientes(){
    return (
        <div>
            <br/>
            <Link class="boton" to="/ingresarcliente">Ingresar cliente</Link>
            <Link class="boton" to="/tablaclientes">Tabla de clientes</Link>
            <br/>
        </div>
    );
}

export default Clientes;