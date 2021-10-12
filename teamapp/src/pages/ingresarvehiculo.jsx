import { Link } from "react-router-dom";


function IngresarVehiculo(){
    return (
        <div>
            <nav>
                <br></br>
                <Link className="copy" to='/perfil'>Perfil</Link>
                <br></br>
                <Link className="copy" to='/vehiculos'>Vehiculos</Link>
                <br></br>
                <Link className="copy" to='/ventas'>Ventas</Link>
                <br></br>
                <Link className="copy" to='/usuarios'>Usuarios</Link>
                <br></br>
                <Link className="copy" to='/'>Cerrar sesión</Link>
            </nav>
            <br/>
            <Link class="boton" to="/ingresarvehiculo">Añadir al inventario</Link>
            <Link class="boton" to="/inventario">Inventario</Link>
            <br/>

    <form class="form1" action="mi_servidor">
        <fieldset>
            <legend> Ingresar nuevo vehículo al inventario </legend>
            <label for="idconcesionario">Id concesionario:</label><br/>
            <input type="text" id="idconcesionario" name="idconcesionario" placeholder="Id del concesionario" required="true" /><br/>

            <label for="idvehiculo">Id vehículo:</label><br/>
            <input type="text" id="idvehiculo" name="idvehiculo" placeholder="Id del vehiculo" required="true" /><br/>

            <label for="fechacompra">Fecha de la compra:</label><br/>
            <input type="date" id="fechacompra" name="fechacompra" placeholder="Fecha de la compra" required="true" /><br/>

            <label for="nombreVehiculo">Nombre del vehículo:</label><br/>
            <input type="text" id="nombreVehiculo" name="nombre" placeholder="Nombre del vehiculo" required="true" /><br/>

            <label for="marca">Marca del vehículo:</label><br/>
            <input type="text" id="marca" name="marca" placeholder="Marca del carro" required="true" /><br/>

            <label for="modelo">Modelo del vehículo:</label><br/>
            <input type="text" id="modelo" name="marca" placeholder="Modelo del carro" required="true" /><br/>

            <label for="costo">Costo de la compra:</label><br/>
            <input type="number" id="costo" name="costo" placeholder="Costo de la compra" required="true" /><br/>

            <label for="proveedor">Proveedor:</label><br/>
            <select id="proveedor" name="proveedor">
                <option value="toyota">Toyota</option>
                <option value="kia">KIA</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="mazda" selected="true">Mazda</option>
            </select><br/>

            <br/>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Restablecer" />

        </fieldset>
    </form>



        </div>
    )
}

export default IngresarVehiculo;