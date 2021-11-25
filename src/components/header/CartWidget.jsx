import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollyFlatbed } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({ closeAll }) => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" style={{ color: "black" }} onClick={closeAll}>
        <FontAwesomeIcon icon={faDollyFlatbed} className="cart-icon" />
        {totalItems > 0 && <span className="widget-span"> {totalItems}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
