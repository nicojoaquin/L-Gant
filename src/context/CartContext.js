import React, {createContext, useState} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])


  //Función que agrega el producto si no existe, y si existe cambia su cantidad.
  const handleAdd = (product) => {

    const exist = cart.find( (cartItem) => cartItem.id === product.id )
    
    if(exist) {
      setCart(cart.map( (cartItem) => cartItem.id === product.id ? 
      {...exist, quantity: exist.quantity + 1} : cartItem) )
    } else {
    setCart([...cart, {...product, quantity: 1}])
    }

  }

  //Función para restar el producto del carrito, si llega a 0 se elimina directamente.
  const handleSub = (product) => {

    const exist = cart.find( (cartItem) => cartItem.id === product.id )

    if(exist.quantity === 1) {
      setCart(cart.filter( (cartItem) => cartItem.id !== product.id ))
    } else {
      setCart(cart.map( (cartItem) => cartItem.id === product.id ? 
      {...exist, quantity: exist.quantity - 1} : cartItem) )
    }

  }

  //Función que elimina directamente el producto del carrito.
  const handleRemove = (product) => {

    const exist = cart.find( (cartItem) => cartItem.id === product.id )

    if(exist) {
      setCart(cart.filter( (cartItem) => cartItem.id !== product.id ))
    } 

  }

  //Función que devuelve el carrito a su estado original, vaciandolo por completo.
  const handleClear = () => {
    setCart([])
  }

  //Calculamos el total de todos los productos del carrito.
  const totalCart = cart.reduce( (price, cartItem) => price + cartItem.quantity * cartItem.price, 0 )

  return(
    <CartContext.Provider 
      value={{ 
        cart, 
        setCart, 
        handleAdd, 
        handleSub,
        handleRemove,
        handleClear,
        totalCart
      }}>
      {children}
    </CartContext.Provider>
  ) 
}

export default CartContextProvider

