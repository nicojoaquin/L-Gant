import React from 'react'
import Item from './Item';

const Itemlist = ({items}) => {

  return (

    //Hacemos un map de los productos y lo pasamos como prop al componente "Item".
    <div className = "item-list">
      {
        items.map(product => {
          return <Item key= {product.id} product= {product} />
        })
      } 
    </div>

  )
}

export default Itemlist;