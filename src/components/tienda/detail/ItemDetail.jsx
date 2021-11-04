import React, { useState } from 'react'

const ItemDetail = ({item}) => {

  let cuotas = item.price / 12;
  let cuotasEntero = cuotas.toFixed()

  return (
    <>

      

        <div 
          className = "item-img" 
          onClick= { () => console.log(item) }
          style = {{
            backgroundImage: `url(${process.env.PUBLIC_URL + item.img})`
          }}>
        </div>

 

      <div className="detail-info">
        
        <div className="price-name">
          <h2>{item.name}</h2>
          <div className="item-price">
            <h3>${item.price}</h3>
            <span>12 cuotas sin interes de ${cuotasEntero}!</span>
          </div>
        </div>

        <div className="item-desc">
          <p>{item.desc}.</p>
          <br />
          <span>{item.comp}</span>
        </div>

        <hr />

  
        <div className="item-talles">
          <h3>Selecciona un talle</h3>
          <br />
          <select className="select" name="talle" required>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
        </div>

        <div className="add__cart">
          <button className="add__cart--button">Agregar al carrito</button>
        </div>

      </div>
      
    </>     
  )

}

export default ItemDetail
