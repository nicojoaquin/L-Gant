import React, {useContext, useState} from 'react'
import { CartContext } from '../../../context/CartContext'
import { collection, addDoc} from '@firebase/firestore';
import db from "../../../config/firebase-config"

const Checkout = () => {

  const {cart, totalCart} = useContext(CartContext)
  const [orderId, setOrderId] = useState("")

  const userInfo = {
    name:  "Nico",
    email: "nicojoaquin1998@gmail.com",
    phone: "1149403739"
  }
  const handleCheckout = async () => {
    const docRef = await addDoc(collection(db, "orders"), {
      buyer: userInfo,
      items: cart,
      total: totalCart
    });
    setOrderId(docRef.id);
  }

  return (
    <section>
      {
        cart.map( (item) => (
          <div key = {item.id}>
            <h1>{item.name}</h1>
          </div>
        ))
      }
      <button onClick = {handleCheckout}>Comprar</button>
    </section>
  )
}

export default Checkout
