import React, {useContext, useState} from 'react'
import { CartContext } from '../../../context/CartContext'
import { collection, addDoc} from '@firebase/firestore';
import db from "../../../config/firebase-config"
import { Redirect } from 'react-router';
import CheckoutItems from './CheckoutItems';
import { useForm } from '../../../hooks/useForm';

const Checkout = () => {

  const {cart, totalCart, handleClear} = useContext(CartContext)

  const [orderId, setOrderId] = useState("")

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email1: "",
    email2: "",
    phone: ""
  })

  const {name, email1, phone} = formValues

  const userInfo = {
    name,
    email: email1,
    phone
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    const docRef = await addDoc(collection(db, "orders"), {
      buyer: userInfo,
      items: cart,
      total: totalCart
    });
    setOrderId(docRef.id);
    reset()
    handleClear()
    sessionStorage.clear("cart")
  }
  
  
  return (
    
    cart.length !== 0  ? (

      <section className = "checkout-container">

        {
          cart.map( (item) => ( 
            <CheckoutItems key = {item.id} {...item} handleCheckout = {handleCheckout} formValues = {formValues} handleInputChange={handleInputChange} />
          ))
        }

      </section>

    )

    : <Redirect to = "/" />

  )
  
}

export default Checkout
