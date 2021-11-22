import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { collection, addDoc } from "@firebase/firestore";
import db from "../../../config/firebase-config";
import { Redirect } from "react-router";
import CheckoutItems from "./CheckoutItems";
import { useForm } from "../../../hooks/useForm";
import { Fade } from "react-awesome-reveal";

const Checkout = () => {
  const { cart, totalCart, handleClear } = useContext(CartContext);

  const { orderId, setOrderId } = useContext(CartContext);

  const [buyLoader, setBuyLoader] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email1: "",
    email2: "",
    phone: "",
  });

  const { name, email1, phone } = formValues;

  const handleCheckout = async (e) => {
    e.preventDefault();
    setBuyLoader(true);

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        buyer: {
          name,
          email: email1,
          phone,
        },
        items: cart,
        total: totalCart,
      });
      setOrderId(docRef.id);
    } catch (err) {
      console.warn(err);
    } finally {
      setBuyLoader(false);
      console.log(orderId);
      reset();
      handleClear();
    }
  };

  return cart.length !== 0 ? (
    <Fade>
      <section className="checkout-container">
        <CheckoutItems
          cart={cart}
          handleCheckout={handleCheckout}
          formValues={formValues}
          handleInputChange={handleInputChange}
          buyLoader={buyLoader}
        />
      </section>
    </Fade>
  ) : (
    <Redirect to="/" />
  );
};

export default Checkout;
