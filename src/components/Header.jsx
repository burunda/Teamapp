import GoogleLogin from 'react-google-login';




const Header = () => {
    const onsuccess=(respuesta)=>{
        console.log('Inicio correcto');
        alert('Inició correctamente');
    }
    const onfailure=(respuesta)=>{
        console.log('Inicio fallido');
        alert('Intenta de nuevo');
    }

    return (
    <header className="header">
        <nav>
            <ul className='cabecera'>
                <div>Logo</div>
                <div className='titulo'>TeamApp<div>Trabajamos por su empresa</div>
                </div>
                <div>
                    <button className='login'>
                        <GoogleLogin 
                        cdiventId="301885852798-pil9v0bsr0khvpjghrspk4nqhls89nij.apps.googleusercontent.com"
                        buttonText="Iniciar Sesión"
                        onSuccess={onsuccess}
                        onFailure={onfailure}
                        cookiePodivcy={'single_host_origin'}
                        />
                    </button>
                </div>
            </ul>
        </nav>
    </header>
    )
}


export default Header;
