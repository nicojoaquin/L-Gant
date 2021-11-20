import React, {useState, useContext} from 'react'
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2'
import buySpinner from "../../../assets/loaders/buySpinner.gif"

const alert = () => {
  Swal.fire({
    title: 'Has agregado el producto al carrito!',
    background: "#fff",
    padding: "2rem",
    position: "center",
    showConfirmButton: false,
    timer: 800,
    customClass: {
      title: "alert-title"
    }
  })
}

const ItemCount = ({setBuy, product}) => {

  const { handleAdd } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [buyLoader, setBuyLoader] = useState(false)

  const AddToCart = () => {
    setBuyLoader(true)
    setTimeout(() => {  
      setBuyLoader(false) 
      setBuy(true)
      alert()
      handleAdd(product, quantity)
    }, 800);
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
      <div className = "item-quantity">
        <button onClick = {() => handleAddQuantiy()}>+</button>
        <span style = {{marginRight: 10}}>{quantity} </span>
        <button onClick = {() => handleSubQuantiy()}>-</button>
      </div>
      <br />
      <br />
      <div className="add__cart">
        <button onClick={() => AddToCart()} className="add__cart--button">
          { buyLoader ?
              <img src={buySpinner} alt="loader" />
            :
              "Agregar al carrito"
          }
        </button>
      </div>
    </div>
  )
}

export default ItemCount
