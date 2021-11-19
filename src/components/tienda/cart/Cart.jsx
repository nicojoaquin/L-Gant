import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { CartContext } from '../../../context/CartContext'
import { Fade } from 'react-awesome-reveal';

const Cart = () => {

  const {cart, totalCart, handleAddMore, handleSub, handleRemove, handleClear } = useContext(CartContext)

  return (

    <Fade>
      <section className = "cart__container">
        <h1>Carrito de compras</h1>
        <hr />
        {
          cart.map( item => 
            <div className="cart__item" key = {item.id}>
              <div className = "cart__item--container">  
                <img className = "cart-img" src = {process.env.PUBLIC_URL + item.img} alt = {item.name} />
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>

                <div className = "item-quantity">
                  <div>
                    <button onClick={() => handleAddMore(item)}>+</button>
                  </div> 
                  <span style = {{marginRight: 10}}>{item.quantity}</span>
                  <div>
                    <button onClick={() => handleSub(item)}>-</button>
                  </div>
                </div>

                <div>
                  <button onClick={() => handleRemove(item)}>Eliminar</button>
                </div>
                <h4>Subtotal: ${item.price * item.quantity}</h4>
              </div> 
            </div>
          )
        }
        <br />
        {
          totalCart ? 

            <div className="total">
              <div>
                <h1>Total: ${totalCart}</h1>
              </div>
              
              <br />
              
              <div className="add__cart">
                <button onClick={() => handleClear()} >Vaciar carrito</button>
              </div>
            </div>
          : 
          <>
            <h1>El carrito esta vacio...</h1>
            <Link to="/tienda/category/all">
              <h2 style={{color:"#044371", textDecoration:"underline"}}>
                Agrega algun producto en la tienda!
              </h2>
            </Link>
          </>
        }
      </section>
    </Fade>
  )
}

export default Cart
