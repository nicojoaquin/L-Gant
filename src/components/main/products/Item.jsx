import React from 'react'

const Item = ({product}) => {

  //Dibujamos los productos con las props del item mapeado.
  return (
    <div style = {{
      backgroundImage: `url(${process.env.PUBLIC_URL + product.img})`
      }} 
      className = "item" onClick= { () =>
        console.log(product) 
      } >

      <section className= "item__info">
        <h3 className = "item__name" >{product.name}</h3>
        <h4 className = "item__price" >${product.price}</h4>
      </section>
      
    </div>
  )
}

export default Item;