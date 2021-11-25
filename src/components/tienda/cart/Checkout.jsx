import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { collection, addDoc } from "@firebase/firestore";
import db from "../../../config/firebase-config";
import { Redirect } from "react-router";
import CheckoutItems from "./CheckoutItems";
import { Fade } from "react-awesome-reveal";
import BuyMessage from "./BuyMessage";

const Checkout = () => {
  const { cart, totalCart, handleClear, orderId, setOrderId } =
    useContext(CartContext);

  const [buyLoader, setBuyLoader] = useState(false);

  const [emailMatchError, setEmailMatchError] = useState(false);

  const [buyed, setBuyed] = useState(false);

  const [buyerInfo, setBuyerInfo] = useState({});

  const handleCheckout = async (data, e) => {
    e.preventDefault();
    if (data.email1 !== data.email2) {
      setEmailMatchError(true);
      return;
    }
    setBuyLoader(true);

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        buyer: data,
        items: cart,
        total: totalCart,
      });
      setOrderId(docRef.id);
    } catch (err) {
      console.warn(err);
    } finally {
      setBuyLoader(false);
      setBuyerInfo(data);
      setBuyed(true);
      handleClear();
    }
  };

  if (buyed) {
    return (
      <Fade>
        <BuyMessage buyerInfo={buyerInfo} orderId={orderId} />
      </Fade>
    );
  }

  return cart.length !== 0 ? (
    <Fade>
      <section className="checkout-container">
        <CheckoutItems
          totalCart={totalCart}
          handleCheckout={handleCheckout}
          buyLoader={buyLoader}
          emailMatchError={emailMatchError}
        />
      </section>
    </Fade>
  ) : (
    <Redirect to="/" />
  );
};

export default Checkout;
