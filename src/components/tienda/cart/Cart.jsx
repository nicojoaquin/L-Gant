import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {

  const { cart, totalCart, handleAdd, handleSub, handleRemove, handleClear } = useContext(CartContext)

  return (
    <section>
      {
        cart.map( item => 
          <div key= {item.id}>
            <h1>{item.name}</h1>
            <h2>{item.quantity}</h2>
            <h3>{item.price}</h3>
            <h4>${item.price * item.quantity}</h4>
            <div className="add__cart">
              <button onClick={() => handleAdd(item)} className="add__cart--button">Agregar al carrito</button>
            </div> 
            <div className="add__cart">
              <button onClick={() => handleSub(item)} className="add__cart--button">Restar</button>
            </div>
            <div className="add__cart">
              <button onClick={() => handleRemove(item)} className="add__cart--button">Eliminar</button>
            </div>
          </div>
        )
      }
      <br />
      {
        totalCart ? 

          <div>
            <div className="add__cart">
              <button onClick={() => handleClear()} className="add__cart--button">Elimitar todo</button>
            </div>
            
            <br />
            
            <div>
              <h1>${totalCart}</h1>
            </div>
          </div>
        : 

        <h1>El carrito esta vacio...</h1>
      }
    </section>
  )
}

export default Cart
