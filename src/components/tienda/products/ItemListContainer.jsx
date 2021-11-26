import React from "react";
import useProducts from "../../../hooks/useProducts";
import ProductsLoader from "../../loaders/ProductsLoader";
import Category from "./Category";
import ItemList from "./Itemlist";

const ItemListContainer = () => {
  const { items, loader } = useProducts();

  return (
    /*Cuando termina de cargar, aparecen los productos.*/
    <div className="container">
      {loader ? (
        <ProductsLoader />
      ) : (
        <div className="store-container">
          <h2 className="products-title">Productos</h2>
          <br />
          <hr />
          <div className="item__container">
            <Category />
            {items.length === 0 ? (
              <h2>No se encuentra la categoría</h2>
            ) : (
              <ItemList products={items} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
