import './styles/App.css';
import Index from "pages";
import Perfil from "pages/perfil";
import Usuarios from "pages/usuarios";
import Vehiculos from "pages/vehiculos";
import Ventas from "pages/ventas";
import Gestion from 'pages/gestion';
import IngresarCliente from 'pages/ingresarcliente';
import IngresarVehiculo from 'pages/ingresarvehiculo';
import IngresarVendedor from 'pages/ingresarvendedor';
import IngresarVentas from 'pages/ingresarventas';
import Inventario from 'pages/inventario';
import TablaClientes from 'pages/tablaclientes';
import TablaVendedores from 'pages/tablavendedores';
import TablaVentas from 'pages/tablaventas';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from 'Layouts/Layout';

function App(){
    return (
        <div className="App">
            <Router>
                <Layout>
                <Switch>
                    <Route path="/gestion">
                        <Gestion />
                    </Route>
                    <Route path="/perfil">
                        <Perfil />
                    </Route>
                    <Route path="/usuarios">
                        <Usuarios />
                    </Route>
                    <Route path="/vehiculos">
                        <Vehiculos />
                    </Route>
                    <Route path="/ventas">
                        <Ventas />
                    </Route>
                    <Route path="/ingresarcliente">
                        <IngresarCliente />
                    </Route>
                    <Route path="/ingresarvehiculo">
                        <IngresarVehiculo />
                    </Route>
                    <Route path="/ingresarvendedor">
                        <IngresarVendedor />
                    </Route>
                    <Route path="/ingresarventas">
                        <IngresarVentas />
                    </Route>
                    <Route path="/inventario">
                        <Inventario />
                    </Route>
                    <Route path="/tablaclientes">
                        <TablaClientes />
                    </Route>
                    <Route path="/tablavendedores">
                        <TablaVendedores />
                    </Route>
                    <Route path="/tablaventas">
                        <TablaVentas />
                    </Route>

                    <Route path="/">
                        <Index />
                    </Route>

                </Switch>
                </Layout>
            </Router>
        </div>
    )
}

export default App;