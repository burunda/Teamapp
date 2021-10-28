import { Link } from "react-router-dom";


function Ventas(){
    return (
        <div>
            <br/>
            <Link class="boton" to="/ingresarventas">Ingresar venta</Link>
            <Link class="boton" to="/tablaventas">Tabla de ventas</Link>
            <br/>



        </div>
    )
}

export default Ventas;