import google from 'media/google.jpg';
import checklist from 'media/checklist.jpg';
import { Link } from "react-router-dom";


function Index() {
    return (
      <div className="App">
      <main>
          <section className="services contenedor" id="servicio">
              <h2 className="subtitulo">A través de esta plataforma usted podrá:</h2>
              <div className="contenedor-servicio">
                  <img src={checklist} alt=""></img>
                  <div className="checklist-servicio">
                      <div className="service">
                          <h3 className="n-service"><span className="number">1</span>Gestionar ventas</h3>
                          <p> Ingresar o registrar las ventas que se realizan.</p>
  
                      </div>
                      <div className="service">
                          <h3 className="n-service"><span className="number">2</span>Llevar un inventario</h3>
                          <p> Permite establecer un inventario con todos los ingresos y las ventas.</p>
                      </div>
                      <div className="service">
                          <h3 className="n-service"><span className="number">3</span>Gestionar los vendedores</h3>
                          <p> Permite ingresar la información básica de los vendedores que participan en un negocio de ventas.</p>
                      </div>
                  </div>
              </div>
          </section>
          <section className="acceso">
              <div className="usrpas">
                  <h2 className="subtitulo">Acceso</h2>
                  <p className="p">Ingrese su usuario y contraseña para acceder al portal</p>
                  <br></br>
                  <script>
                      <usrpas />
                  </script>
                  <form className="form1">
                    Usuario: <input type="text" name="usuario" placeholder="admin"></input>
                    <br></br>
                    Contraseña: <input type="password" name="password" placeholder="1234"></input>
                    <br></br>
                    <button className="login">
                        <Link className="login2" to='/perfil'>Acceder</Link>
                    </button>
                  </form>
                  <figure>
                      <img src={google} alt=""></img>
  
                  </figure>
                  </div>
          </section>
  
      </main>
  
  
      </div>
    );
  }
  
  export default Index;
  
  function usrpas(){
      if (document.form1.usuario.value === "admin1" && document.form1.password.value === "1234"){
        window.location = "gestion.html";
        return
      } else {
        alert("Error de Usuario o Contraseña. Intenta de nuevo.")
      }
    }
    