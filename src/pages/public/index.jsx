import checklist from 'media/checklist.jpg';
import GoogleLogin from 'react-google-login';


function Index() {
    const onsuccess=(respuesta)=>{
        console.log('Inicio correcto');
        alert('Inició correctamente');
    }
    const onfailure=(respuesta)=>{
        console.log('Inicio fallido');
        alert('Intenta de nuevo');
    }
    
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
                    <br></br>
                    <button className="login">
                        <GoogleLogin
                        clientId="301885852798-pil9v0bsr0khvpjghrspk4nqhls89nij.apps.googleusercontent.com"
                        buttonText="Iniciar Sesión"
                        onSuccess={onsuccess}
                        onFailure={onfailure}
                        cookiePolicy={'single_host_origin'}
                        />
                    </button>
                    <br></br>
                  </form>
                  </div>
          </section>
  
      </main>
  
  
      </div>
    );
  }
  
  export default Index;
  
