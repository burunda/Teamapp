
import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Login() {
    const onSuccess = (res) => {
      console.log('inicio de sesión exitoso');
      alert(
        `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
      );
      refreshTokenSetup(res);
    };
  
    const onFailure = (res) => {
      console.log('Login failed: res:', res);
      alert(
        `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
      );
    };
  
    return (
      <div>
        <GoogleLogin
          clientId="301885852798-pil9v0bsr0khvpjghrspk4nqhls89nij.apps.googleusercontent.com"
          buttonText="Iniciar Sesión"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    );
  }

export default Login;
