import { Link } from "react-router-dom";


function IngresarVendedor(){
    return (
        <div>
            <br/>
            <Link class="boton" to="/ingresarvendedor">Ingresar vendedor</Link>
            <Link class="boton" to="/tablavendedores">Tabla de vendedores</Link>
            <br/>

    <form class="form1" action="mi_servidor">
        <fieldset>
            <legend> Ingresar nuevo vendedor </legend>
            <label for="idvendedor">Id vendedor:</label><br/>
            <input type="text" id="idvendedor" name="idvendedor" readonly="true" value="100" /><br/>

            <label for="nombre">Nombre:</label><br/>
            <input type="text" id="nombre" name="nombre" placeholder="Escribe el nombre" required="true" /><br/>

            <label for="apellido">Apellido:</label><br/>
            <input type="text" id="apellido" name="apellido" placeholder="Escribe el apellido" required="true" /><br/>

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

            <label>Marca de especialidad</label><br/>
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

export default IngresarVendedor;