import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import {useHistory} from "react-router-dom"
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {

  const history = useHistory()
  const [buy, setBuy] = useState(false)

  const goToCart = () => {
    history.push('/cart')
  }
 
  let cuotas = product.price / 12;
  let cuotasEntero = cuotas.toFixed(2)

  return (

    <Fade>     
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
          
        {
          !buy ?  
            <ItemCount setBuy = {setBuy} product = {product} />
          :
            <div className="add__cart">
              <button onClick={goToCart} className="add__cart--button">Continuar con la compra</button>       
            </div> 
        }
      </div>    
    </Fade>    
    
  )

}

export default ItemDetail
