import React from "react";
import BuyLoader from "../../loaders/BuyLoader";
import { useForm } from "react-hook-form";

const CheckoutItems = ({
  totalCart,
  handleCheckout,
  buyLoader,
  emailMatchError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form className="checkout-form" onSubmit={handleSubmit(handleCheckout)}>
        <legend>
          <h2>Ingrese sus datos</h2>
        </legend>
        <hr />
        <div>
          <label style={{ fontWeight: "bold" }} htmlFor="name">
            Nombre
          </label>
          <br />
          <input
            type="text"
            name="name"
            className="form-input"
            {...register("name", {
              required: {
                value: true,
                message: "Ingrese un nombre",
              },
            })}
          />
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label style={{ fontWeight: "bold" }} htmlFor="apellido">
            Apellido
          </label>
          <br />
          <input
            type="text"
            name="apellido"
            className="form-input"
            {...register("apellido", {
              required: {
                value: true,
                message: "Ingrese un apellido",
              },
            })}
          />
          {errors.name && (
            <span className="error-msg">{errors.apellido.message}</span>
          )}
        </div>

        <div>
          <label style={{ fontWeight: "bold" }} htmlFor="email1">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email1"
            className="form-input"
            {...register("email1", {
              required: {
                value: true,
                message: "Ingrese un email",
              },
            })}
          />
          {errors.email1 && (
            <span className="error-msg">{errors.email1.message}</span>
          )}
          {emailMatchError && (
            <span className="error-msg">El email debe coindidir</span>
          )}
        </div>

        <div>
          <label style={{ fontWeight: "bold" }} htmlFor="email2">
            Ingrese nuevamente su email
          </label>
          <br />
          <input
            type="email"
            name="email2"
            className="form-input"
            {...register("email2")}
          />
          {emailMatchError && (
            <span className="error-msg">El email debe coindidir</span>
          )}
        </div>

        <div>
          <label style={{ fontWeight: "bold" }} htmlFor="phone">
            Teléfono
          </label>
          <br />
          <input
            type="text"
            name="phone"
            className="form-input"
            {...register("phone", {
              required: {
                value: true,
                message: "Ingrese un número de teléfono",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "Escriba un número de teléfono válido",
              },
              minLength: {
                value: 10,
                message: "El número debe contener 10 caractéres",
              },
              maxLength: {
                value: 10,
                message: "El número debe contener 10 caractéres",
              },
            })}
          />
          {errors.phone && (
            <span className="error-msg">{errors.phone.message}</span>
          )}
        </div>

        <br />
        <h3>Total: ${totalCart}</h3>
        <div className="checkout__button--container">
          <button type="submit" className="checkout-button buy-button">
            {buyLoader ? <BuyLoader /> : "Comprar"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutItems;
