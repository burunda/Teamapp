import axios from 'axios';

export const obtenerVehiculos = async (setVehiculos, setEjecutarConsulta) => {
    const option = {method: 'GET', url: 'http://localhost:5000/inventario/'};
    await axios.request(options).then(function (response){
        setVehiculos(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    setEjecutarConsulta(false);
};