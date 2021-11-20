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

  const {name, email1, phone} = formValues;

  const handleCheckout = async (e) => {
    
    e.preventDefault()

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        buyer: {
          name,
          email: email1,
          phone
        },
        items: cart,
        total: totalCart
      });
      setOrderId(docRef.id);
      
    } catch (err) {
      console.warn(err);

    } finally {
      console.log(orderId);
      reset()
      handleClear()
      sessionStorage.clear("cart")
    }

  }
  
  
  return (
    
    cart.length !== 0  ? (

      <section className = "checkout-container">
        <CheckoutItems cart = {cart} handleCheckout = {handleCheckout} formValues = {formValues} handleInputChange={handleInputChange} />    
      </section>

    )

    : <Redirect to = "/" />

  )
  
}

export default Checkout
