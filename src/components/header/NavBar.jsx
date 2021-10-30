import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

return (
   
    <nav>  
        <NavLink exact to= "/" className = "links">Inicio</NavLink>
        <NavLink to= "/tienda" className = "links">Tienda</NavLink>
        <NavLink to= "/nosotros" className = "links">Sobre nosotros</NavLink>
        <NavLink to= "/contacto" className = "links">Contacto</NavLink>     
    </nav>

)

}

export default NavBar;
