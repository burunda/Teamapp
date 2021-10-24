import { Link } from "react-router-dom";


function Vehiculos(){
    return (
        <div>
            <br/>
            <Link class="boton" to="/ingresarvehiculo">Añadir al inventario</Link>
            <Link class="boton" to="/inventario">Inventario</Link>
            <br/>

            <table className="table"> 
        <tr>
            <th>Id concesionario</th>
            <th>Id vehículo</th>
            <th>Fecha de la compra</th>
            <th>Nombre del vehículo</th>
            <th>Marca del vehículo</th>
            <th>Modelo del vehículo</th>
            <th>Costo de la compra</th>
            <th>Proveedor</th>
        </tr>
        <tr>
            <td>20211376</td>
            <td>140178</td>
            <td>08/12/2018</td>
            <td>Cerato</td>
            <td>KIA</td>
            <td>2018</td>
            <td>51000000</td>
            <td>KIA</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>141548</td>
            <td>20/12/2018</td>
            <td>Captiva</td>
            <td>chevrolet</td>
            <td>2018</td>
            <td>38000000</td>
            <td>Chevrolet</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>147386</td>
            <td>11/01/2020</td>
            <td>RAV4</td>
            <td>Toyota</td>
            <td>2019</td>
            <td>92000000</td>
            <td>Toyota</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>147653</td>
            <td>05/05/2020</td>
            <td>CX 30</td>
            <td>Mazda</td>
            <td>2020</td>
            <td>78000000</td>
            <td>Mazda</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>142346</td>
            <td>13/02/2021</td>
            <td>Prado</td>
            <td>Toyota</td>
            <td>2021</td>
            <td>51000000</td>
            <td>Toyota</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>142646</td>
            <td>26/05/2021</td>
            <td>Beat</td>
            <td>chevrolet</td>
            <td>2021</td>
            <td>35000000</td>
            <td>Chevrolet</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>148654</td>
            <td>17/06/2021</td>
            <td>Mazda 3</td>
            <td>Mazda</td>
            <td>2021</td>
            <td>90000000</td>
            <td>Mazda</td>
        </tr>
        <tr>
            <td>20211376</td>
            <td>147986</td>
            <td>21/06/2021</td>
            <td>4Runner</td>
            <td>Toyota</td>
            <td>2021</td>
            <td>180000000</td>
            <td>Toyota</td>
        </tr>

        <tr>
            <td>20211376</td>
            <td>140975</td>
            <td>03/11/2021</td>
            <td>Soul</td>
            <td>KIA</td>
            <td>2021</td>
            <td>27000000</td>
            <td>KIA</td>
        </tr>
    </table>




        </div>
    )
}

export default Vehiculos;