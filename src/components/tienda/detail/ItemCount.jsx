import React, {useState, useContext} from 'react'
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2'

const alert = () => {
  Swal.fire({
    title: 'Has agregado el producto al carrito!',
    background: "#fff",
    padding: "4rem",
    backdrop: false,
    position: "center",
    showConfirmButton: false,
    timer: 1300,
    customClass: {
      title: "alert-title"
    }
  })
}

const ItemCount = ({setBuy, product}) => {

  const { handleAdd } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const AddToCart = () => {
    setBuy(true)
    alert()
    handleAdd(product, quantity)
  }

  const handleAddQuantiy = () => {
   setQuantity(quantity + 1)
  }
  
  const handleSubQuantiy = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div>
      <button onClick = {() => handleAddQuantiy()}>+</button>
      <span>{quantity} </span>
      <button onClick = {() => handleSubQuantiy()}>-</button>
      <br />
      <br />
      <div className="add__cart">
        <button onClick={() => AddToCart()} className="add__cart--button">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
