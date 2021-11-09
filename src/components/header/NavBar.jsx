import React from 'react';
import { Link } from 'react-router-dom';
import {categoryData} from "../../data/categoryData"

const NavBar = ({nav, setNav , catOpen, setCatOpen, closeAll}) => {

return (
   
    <nav className={nav ? "navOpen" : "nav"}>  
        <Link onClick={() => closeAll() } to= "/" className = "links">Inicio</Link>
        <div style={{cursor:"pointer", position:"relative", bottom:3}} className = "links store" onClick={() => setCatOpen(!catOpen)}><p>Tienda <span className={`arrow ${catOpen && "arrowDown" }`}>➨</span></p>
          <div className={catOpen ? "category-nav-open" : "category-nav" }>

            {
              categoryData.map(cat => 
                <Link key = {cat.id} to = {`/tienda/category/${cat.id}`} className="category__link-nav" onClick={() => setNav(false) } >{cat.name}</Link> 
              )
            }
            
          </div>
        </div>
        <Link onClick={() => closeAll() } to= "/nosotros" className = "links">Sobre nosotros</Link>
        <Link onClick={() => closeAll() } to= "/contacto" className = "links">Contacto</Link>     
    </nav>

)

}

export default NavBar;
