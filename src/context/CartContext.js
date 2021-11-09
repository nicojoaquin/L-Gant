import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  //Función que agrega el producto si no existe, y si existe cambia su cantidad.
  const handleAdd = (product, quantitySetted) => {

    const exist = cart.find( (cartItem) => cartItem.id === product.id )
    
    if(exist) {
      setCart(cart.map( (cartItem) => cartItem.id === product.id ? 
      {...exist, quantity: exist.quantity + 1} : cartItem) )
    } else {
    setCart([...cart, {...product, quantity: quantitySetted}])
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
  //Sumamos las cantidades para el contador del CartWidget.
  const totalItems = cart.reduce( (quantity, cartItem) => quantity + cartItem.quantity, 0 )

  return(
    <CartContext.Provider 
      value={{ 
        cart, 
        handleAdd, 
        handleSub,
        handleRemove,
        handleClear,
        totalCart,
        totalItems
      }}>
      {children}
    </CartContext.Provider>
  ) 
}

export default CartContextProvider

