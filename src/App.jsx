import 'styles/styles.css';
import Index from "pages/public/index";
//import Perfil from "pages/perfil";
import Clientes from "pages/admin/clientes";
import Vehiculos from "pages/admin/vehiculos";
import Ventas from "pages/admin/ventas";
import Gestion from 'pages/admin/gestion';
import IngresarCliente from 'pages/admin/ingresarcliente';
import IngresarVehiculo from 'pages/admin/ingresarvehiculo';
import IngresarVendedor from 'pages/admin/ingresarvendedor';
import IngresarVentas from 'pages/admin/ingresarventas';
//import Inventario from 'pages/inventario';
//import TablaClientes from 'pages/admin/tablaclientes';
//import TablaVendedores from 'pages/admin/tablavendedores';
//import TablaVentas from 'pages/admin/tablaventas';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from 'Layouts/Layout';
import PrivateLayout from 'Layouts/PrivateLayout';

function App(){
    return (
    <Router>
        <Switch>
            <Route path={['/gestion','/gestion/clientes','/gestion/vehiculos','/gestion/ventas','/gestion/ingresar-cliente','/gestion/ingresar-vehiculo','/gestion/ingresar-vendedor','/gestion/ingresar-ventas']}>
                <PrivateLayout>
                    <Switch>
                        <Route path='/gestion'>
                            <Gestion />
                        </Route>
                        <Route path='/gestion/vehiculos'>
                            <Vehiculos />
                        </Route>
                        <Route path='gestion/ventas'>
                            <Ventas />
                        </Route>
                        <Route path='/gestion/clientes'>
                            <Clientes />
                        </Route>
                        <Route path='/gestion/ingresar-cliente'>
                            <IngresarCliente />
                        </Route>
                        <Route path='gestion/ingresar-vehiculo'>
                            <IngresarVehiculo />
                        </Route>
                         <Route path='/gestion/ingresar-vendedor'>
                            <IngresarVendedor />
                        </Route>
                        <Route path='gestion/ingresar-ventas'>
                            <IngresarVentas />
                        </Route>
                    </Switch>
                </PrivateLayout>
            </Route>
            <Route path={['/']}>
                <Layout>
                    <Switch>
                        <Route path="/">
                            <Index />
                        </Route>
                    </Switch>
                </Layout>
            </Route>
        </Switch>
    </Router>
    );
}

export default App;

