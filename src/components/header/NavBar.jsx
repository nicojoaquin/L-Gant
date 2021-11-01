import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({nav,  setNav}) => {


return (
   
    <nav className={nav ? "navOpen" : "nav"}>  
        <Link onClick={() => setNav(false) } to= "/" className = "links">Inicio</Link>
        <Link onClick={() => setNav(false) } to= "/tienda" className = "links">Tienda</Link>
        <Link onClick={() => setNav(false) } to= "/nosotros" className = "links">Sobre nosotros</Link>
        <Link onClick={() => setNav(false) } to= "/contacto" className = "links">Contacto</Link>     
    </nav>

)

}

export default NavBar;
