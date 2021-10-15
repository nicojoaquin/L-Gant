import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {

return (
   
    <nav>
      <ul>
        <li><a href="/" className = "links">Inicio</a></li>
        <li><a href="/" className = "links">Tienda</a></li>
        <li><a href="/" className = "links">Sobre nosotros</a></li>
        <li><a href="/" className = "links">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>

)

}

export default NavBar;