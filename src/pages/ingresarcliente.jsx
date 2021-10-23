import { Link } from "react-router-dom";


function IngresarCliente(){
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

    <form class="form1" action="mi_servidor">
        <fieldset>
            <legend> Ingresar nuevo cliente </legend>
            <label for="idcliente">Id Cliente:</label><br/>
            <input type="text" id="idcliente" name="idcliente" placeholder="# ID" required="true" /><br/>

            <label for="nombre">Nombre:</label><br/>
            <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required="true" /><br/>

            <label for="apellido">Apellido:</label><br/>
            <input type="text" id="apellido" name="apellido" placeholder="Escribe tu apellido" required="true" /><br/>

            <label for="email">Email:</label><br/>
            <input type="email" id="email" name="email" placeholder="correo@correo.com" /><br/>

            <label for="edad">Edad:</label><br/>
            <input type="number" id="edad" name="edad" placeholder="##" /><br/>

            <label for="telefono">Teléfono:</label><br/>
            <input type="tel" id="telefono" name="telefono" placeholder="##" /><br/>

            <label>Género</label><br/>
            <input type="radio" id="femenino" name="genero" value="femenino" />
            <label for="femenino">Femenino</label><br/>
            <input type="radio" id="masculino" name="genero" value="masculino" />
            <label for="masculino">Masculino</label><br/>

            <label>Marca de auto favorita</label><br/>
            <input type="checkbox" id="mazda" name="marca" value="mazda" />
            <label for="mazda">Mazda </label>

            <input type="checkbox" id="toyota" name="marca" value="toyota" />
            <label for="toyota">Toyota</label><br/>

            <input type="checkbox" id="chevrolet" name="marca" value="chevrolet" />
            <label for="chevrolet">Chevrolet</label>

            <input type="checkbox" id="kia" name="marca" value="kia" />
            <label for="kia">KIA</label><br/>

            <label for="comentario">Comentario:</label><br/>
            <textarea id="comentario" name="comentario" rows="2" cols="30" placeholder="Preferencias">  
            </textarea><br/>

            <br/>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Restablecer" />

        </fieldset>
    </form>



        </div>
    )
}

export default IngresarCliente;