import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2'
import ItemCount from './ItemCount';

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

const ItemDetail = ({product}) => {

  const { handleAdd } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const AddToCart = () => {
    alert()
    handleAdd(product, quantity)
  }

  const handleAddQuantiy = () => {
   setQuantity(quantity + 1)
  }
  
  const handleSubQuantiy = () => {
    if(quantity > 1)
    setQuantity(quantity - 1)
  }

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
        
        <ItemCount quantitySetted={quantity} handleAddQuantiy={handleAddQuantiy} handleSubQuantiy={handleSubQuantiy} />
        <div className="add__cart">
          <button onClick={() => AddToCart()} className="add__cart--button">Agregar al carrito</button>
        </div>

      </div>
      
    </>     
  )

}

export default ItemDetail
