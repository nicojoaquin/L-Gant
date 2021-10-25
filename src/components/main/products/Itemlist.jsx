import React from 'react'
import Item from './Item';

const Itemlist = ({products}) => {

  return (

    //Hacemos un map de los productos y lo pasamos como prop al componente "Item".
    <div className = "item-list">
      {
        products.map( product => 
          <Item 
            key = {product.id} 
            product = {product} 
          />
        )
      } 
    </div>

  )
}

export default Itemlist;