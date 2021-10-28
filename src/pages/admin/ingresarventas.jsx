import { Link } from "react-router-dom";


function IngresarVentas(){
    return (
        <div>
            <br/>
            <Link class="boton" to="/ingresarventas">Ingresar ventas</Link>
            <Link class="boton" to="/tablaventas">Tabla de ventas</Link>
            <br/>

    <form class="form1" action="mi_servidor">
        <fieldset>
            <legend> Ingresar nueva venta </legend>

            <label for="idconcesionario">Id del concesionario:</label><br/>
            <input type="text" id="idconcesionario" name="idconcesionario" placeholder="Id del concesionario" required="true" /><br/>

            <label for="idvehiculo">Id vehículo:</label><br/>
            <input type="text" id="idvehiculo" name="idvehiculo" placeholder="Id del vehiculo" required="true" /><br/>

            <label for="fechaVenta">Fecha de la venta:</label><br/>
            <input type="date" id="fechaVenta" name="fechaVenta" placeholder="Fecha de la venta" required="true" /><br/>

            <label for="nombreVehiculo">Nombre del vehículo:</label><br/>
            <input type="text" id="nombreVehiculo" name="nombre" placeholder="Nombre del vehiculo" required="true" /><br/>

            <label for="marca">Marca del vehículo:</label><br/>
            <input type="text" id="marca" name="marca" placeholder="Marca del carro" required="true" /><br/>

            <label for="modelo">Modelo del vehículo:</label><br/>
            <input type="text" id="modelo" name="marca" placeholder="Modelo del carro" required="true" /><br/>

            <label for="precio">Precio de la venta:</label><br/>
            <input type="number" id="precio" name="precio" placeholder="Precio de la venta" required="true" /><br/>

            <label for="ventas">Nombre del vendedor:</label><br/>
            <select id="ventas" name="ventas">
                <option value="andres">Andrés Osorio Reyes</option>
                <option value="carlos">Carlos Cáceres Castro</option>
                <option value="pedro">Pedro Morales Mora</option>
                <option value="marlene">Marlene Rojas Rojas</option>
                <option value="alejandro" selected="true">Alejandro González Mota</option>
            </select><br/>

            <br/>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Restablecer" />

        </fieldset>
    </form>



        </div>
    )
}

export default IngresarVentas;