import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {

  const {cart, totalCart, handleAddMore, handleSub, handleRemove, handleClear } = useContext(CartContext)

  return (
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
                <div>
              </div>
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

          <div>
            <div>
              <h1>Total: ${totalCart}</h1>
            </div>
            
            <br />
            
            <div className="add__cart">
              <button onClick={() => handleClear()} >Vaciar carrito</button>
            </div>
          </div>
        : 

        <h1>El carrito esta vacio...</h1>
      }
    </section>
  )
}

export default Cart
