import React from "react";
import useProducts from "../../../hooks/useProducts";
import ProductsLoader from "../../loaders/ProductsLoader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { item, loader } = useProducts();

  return (
    <div className="detail-container">
      {loader ? (
        <ProductsLoader />
      ) : !item ? (
        <h2>No se encuentra el producto</h2>
      ) : (
        <ItemDetail product={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
