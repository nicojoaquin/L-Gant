import React from "react";
import BuyLoader from "../../loaders/BuyLoader";

const CheckoutItems = ({
  cart,
  handleCheckout,
  formValues,
  handleInputChange,
  buyLoader,
}) => {
  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
        </div>
      ))}

      <div>
        <form className="checkout-form" onSubmit={handleCheckout}>
          <legend>Ingrese sus datos</legend>

          <div>
            <label htmlFor="name">Nombre</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Ingrese su nombre..."
              value={formValues.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email1">Email</label>
            <br />
            <input
              type="email"
              name="email1"
              placeholder="email@ejemplo.com"
              value={formValues.email1}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email2">Ingrese nuevamente su email</label>
            <br />
            <input
              type="email"
              name="email2"
              placeholder="email@ejemplo.com"
              value={formValues.email2}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="phone">Teléfono</label>
            <br />
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
            />
          </div>

          <br />

          <div className="checkout__button--container">
            <button type="submit" className="checkout-button buy-button">
              {buyLoader ? <BuyLoader /> : "Comprar"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutItems;
