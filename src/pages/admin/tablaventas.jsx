import { Link } from "react-router-dom";


function TablaVentas(){
    return (
        <div>
            <br/>
            <Link class="boton" to="/ingresarventas">Ingresar venta</Link>
            <Link class="boton" to="/tablaventas">Tabla de ventas</Link>
            <br/>

    <table className="table">
        <tr>
            <th>Id concesionario</th>
            <th>Id vehículo</th>
            <th>Fecha de venta</th>
            <th>Nombre del vehículo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Id vendedor</th>
        </tr>
        <tr>
            <td>20211376</td>
            <td>147167</td>
            <td>25/06/2021</td>
            <td>Corolla Cross</td>
            <td>Toyota</td>
            <td>2021</td>
            <td>80000000</td>
            <td>231</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>147351</td>
            <td>13/02/2021</td>
            <td>Rio</td>
            <td>KIA</td>
            <td>2018</td>
            <td>50000000</td>
            <td>231</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>148348</td>
            <td>02/03/2021</td>
            <td>Mazda 3</td>
            <td>Mazda</td>
            <td>2021</td>
            <td>98000000</td>
            <td>234</td>
        </tr>


        <tr>
            <td>20211376</td>
            <td>147132</td>
            <td>18/04/2021</td>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2019</td>
            <td>57000000</td>
            <td>232</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>141438</td>
            <td>16/08/2021</td>
            <td>Sportage</td>
            <td>KIA</td>
            <td>2021</td>
            <td>122000000</td>
            <td>235</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>142186</td>
            <td>10/07/2021</td>
            <td>Onix turbo</td>
            <td>chevrolet</td>
            <td>2021</td>
            <td>60000000</td>
            <td>233</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>140249</td>
            <td>19/06/2021</td>
            <td>Mazda 2 sport carbon</td>
            <td>Mazda</td>
            <td>2020</td>
            <td>62000000</td>
            <td>232</td>

        </tr>
        <tr>
            <td>20211376</td>
            <td>142465</td>
            <td>25/07/2021</td>
            <td>Yaris</td>
            <td>Toyota</td>
            <td>2021</td>
            <td>72000000</td>
            <td>235</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>140437</td>
            <td>15/07/2021</td>
            <td>Blazer</td>
            <td>chevrolet</td>
            <td>2018</td>
            <td>120000000</td>
            <td>234</td>

        </tr>
    </table>



        </div>
    )
}

export default TablaVentas;