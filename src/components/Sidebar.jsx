import React from 'react'
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <nav className='sidebar'>
            <Link className="copy" to='/gestion/perfil'>Perfil</Link>
            <Link className="copy" to='/gestion/vehiculos'>Vehiculos</Link>
            <Link className="copy" to='/gestion/ventas'>Ventas</Link>
            <Link className="copy" to='/gestion/usuarios'>Usuarios</Link>
            <Link className="copy" to='/'>Cerrar sesión</Link>
        </nav>
    )
};

export default Sidebar;
