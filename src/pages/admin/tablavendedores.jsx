import { Link } from "react-router-dom";


function TablaVendedores(){
    return (
        <div>
            <br/>
            <Link class="boton" to="/ingresarvendedor">Ingresar vendedor</Link>
            <Link class="boton" to="/tablavendedores">Tabla de vendedores</Link>
            <br/>

    <table className="table">
        <tr>
            <th> Id </th>
            <th> Nombre </th>
            <th> Apellido </th>
            <th> Email </th>
            <th> Edad </th>
            <th> Teléfono </th>
            <th> Género </th>
            <th> Marca de especialidad </th>
            <th> Comentarios </th>
        </tr>
        <tr>
            <td>001</td>
            <td>Andrés</td>
            <td>Osorio Reyes</td>
            <td>aosorio@gmail.com</td>
            <td>52</td>
            <td>3134499851</td>
            <td>Masculino</td>
            <td>Mazda</td>
            <td></td>
        </tr>
        <tr>
            <td>002</td>
            <td>Carlos</td>
            <td>Cáceres Castro</td>
            <td>ccastro@gmail.com</td>
            <td>45</td>
            <td>3137417623</td>
            <td>Masculino</td>
            <td>KIA</td>
            <td></td>
        </tr>
        <tr>
            <td>003</td>
            <td>Pedro</td>
            <td>Morales Mora</td>
            <td>pmorales@gmail.com</td>
            <td>37</td>
            <td>3131638521</td>
            <td>Masculino</td>
            <td>Chevrolet</td>
            <td></td>
        </tr>
        <tr>
            <td>004</td>
            <td>Marlene</td>
            <td>Rojas Rojas</td>
            <td>mrojas@gmail.com</td>
            <td>32</td>
            <td>3128564413</td>
            <td>Femenino</td>
            <td>Toyota</td>
            <td></td>
        </tr>
        <tr>
            <td>005</td>
            <td>Alejandro</td>
            <td>González Mota</td>
            <td>agonzalez@gmail.com</td>
            <td>35</td>
            <td>3124569885</td>
            <td>Masculino</td>
            <td>Mazda</td>
            <td></td>
        </tr>
    </table>



        </div>
    )
}

export default TablaVendedores;