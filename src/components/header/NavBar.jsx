import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({nav, setNav , catOpen, setCatOpen, closeAll}) => {

return (
   
    <nav className={nav ? "navOpen" : "nav"}>  
        <Link onClick={() => closeAll() } to= "/" className = "links">Inicio</Link>
        <div style={{cursor:"pointer", position:"relative", bottom:3}} className = "links store" onClick={() => setCatOpen(!catOpen)}><p>Tienda <span className={`arrow ${catOpen && "arrowDown" }`}>➨</span></p>
          <div className={catOpen ? "category-nav-open" : "category-nav" }>
            <Link to = '/tienda/category/pantalones' className="category__link-nav" onClick={() => setNav(false) } >Pantalones</Link>
            <Link to = '/tienda/category/camisas' className="category__link-nav" onClick={() => setNav(false) } >Camisas</Link>
            <Link to = '/tienda/category/sacos' className="category__link-nav" onClick={() => setNav(false) } >Sacos</Link>
            <Link to = '/tienda/category/trajes' className="category__link-nav" onClick={() => setNav(false) } >Trajes</Link>
            <Link to = '/tienda/category/zapatos' className="category__link-nav" onClick={() => setNav(false) } >Zapatos</Link>
            <Link to = '/tienda/category/accesorios' className="category__link-nav" onClick={() => setNav(false) } >Accesorios</Link>
          </div>
        </div>
        <Link onClick={() => closeAll() } to= "/nosotros" className = "links">Sobre nosotros</Link>
        <Link onClick={() => closeAll() } to= "/contacto" className = "links">Contacto</Link>     
    </nav>

)

}

export default NavBar;
