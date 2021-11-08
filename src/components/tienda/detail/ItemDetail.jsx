import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ({product}) => {

  const { handleAdd } = useContext(CartContext)

  let cuotas = product.price / 12;
  let cuotasEntero = cuotas.toFixed(2)

  return (
    <>

      <div 
        className = "item-img" 
        onClick= { () => console.log(product) }
        style = {{
          backgroundImage: `url(${process.env.PUBLIC_URL + product.img})`
         }}>
      </div>

      <div className="detail-info">
        
        <div className="price-name">
          <h2>{product.name}</h2>
          <div className="item-price">
            <h3>${product.price}</h3>
            <span>12 cuotas sin interes de ${cuotasEntero}!</span>
          </div>
        </div>

        <div className="item-desc">
          <p>{product.desc}.</p>
          <br />
          <span>{product.comp}</span>
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
          <button onClick={() => handleAdd(product)} className="add__cart--button">Agregar al carrito</button>
        </div>

      </div>
      
    </>     
  )

}

export default ItemDetail
