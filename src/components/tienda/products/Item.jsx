import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({product}) => (
  
  //Dibujamos los productos con las props del item mapeado.
  <Link to={`/tienda/${product.id}`}>
    
    <div
      className = "item" 
      style = {{
        backgroundImage: `url(${process.env.PUBLIC_URL + product.img})`
      }}>

      <div className= "item__info">
        <h3 className = "item__name" >{product.name}</h3>
        <h4 className = "item__price" >${product.price}</h4>
      </div>

    </div>  

  </Link>
    
)

export default Item;