import { Link } from "react-router-dom";


function TablaClientes(){
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
            <Link class="boton" to="/ingresarcliente">Ingresar cliente</Link>
            <Link class="boton" to="/tablaclientes">Tabla de clientes</Link>
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
            <th> Marcas de auto favoritas </th>
            <th> Comentarios </th>
        </tr>
        <tr>
            <td>001</td>
            <td>Carlos</td>
            <td>Castro</td>
            <td>ccastro@gmail.com</td>
            <td>52</td>
            <td>3134679851</td>
            <td>Masculino</td>
            <td>Mazda, Toyota</td>
            <td></td>
        </tr>
        <tr>
            <td>002</td>
            <td>Andrea</td>
            <td>Calle</td>
            <td>acalle@gmail.com</td>
            <td>45</td>
            <td>3137418523</td>
            <td>Femenino</td>
            <td>KIA</td>
            <td>Últimos modelos</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Ricardo</td>
            <td>Sanchez</td>
            <td>rsanchez@gmail.com</td>
            <td>37</td>
            <td>3139638521</td>
            <td>Masculino</td>
            <td>KIA, volvo</td>
            <td>Me gusta el color rojo</td>
        </tr>
        <tr>
            <td>004</td>
            <td>Juliana</td>
            <td>Jiménez</td>
            <td>jjimenez@gmail.com</td>
            <td>32</td>
            <td>3128527413</td>
            <td>Femenino</td>
            <td>Volvo, Toyota</td>
            <td>Que sean seguros</td>
        </tr>
        <tr>
            <td>005</td>
            <td>Andrés</td>
            <td>Unigarro</td>
            <td>aunigarro@gmail.com</td>
            <td>35</td>
            <td>3124569873</td>
            <td>Masculino</td>
            <td>Mazda, Volvo</td>
            <td></td>
        </tr>
        <tr> 
            <td>006</td>
            <td>Andrés</td>
            <td>Pérez</td>
            <td>aperez@gmail.com</td>
            <td>51</td>
            <td>3121594873</td>
            <td>Masculino</td>
            <td>KIA, Volvo</td>
            <td>Que tengan descuento</td>
        </tr>
        <tr>
            <td>007</td>
            <td>Sandra</td>
            <td>Buitrago</td>
            <td>sbuitrago@gmail.com</td>
            <td>29</td>
            <td>3117538694</td>
            <td>Femenino</td>
            <td>Toyota, Volvo</td>
            <td></td>
        </tr>
        <tr>
            <td>008</td>
            <td>Will</td>
            <td>Chávez</td>
            <td>wchavez@gmail.com</td>
            <td>48</td>
            <td>3111534865</td>
            <td>Masculino</td>
            <td>Toyota, Volvo, KIA</td>
            <td>Que sea familiar</td>
        </tr>
    </table>



        </div>
    )
}

export default TablaClientes;