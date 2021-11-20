import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import useProducts from '../../../hooks/useProducts';
import Category from './Category';
import ItemList from "./Itemlist"

const ItemListContainer = () => {

  const {catId} = useParams()
  const {data, loader} = useProducts();
  const [items, setItems] = useState([])

  useEffect(() => {
    if(catId === "all"){
      setItems(data) 
    }
    else {
      setItems(data.filter(dt => dt.category === catId))  
    }
  },[data, catId])


  return (

    /*Cuando termina de cargar, aparecen los productos.*/
    <div className = "container">

      {
        loader ?        
          <svg 
          className = "cssload-spin-box loader"
          style = {{marginTop: 400}}>
          </svg> 
        :     
        <div>
          <h2 className = "products-title">Productos</h2>
          <br />
          <hr />
          <div className = "item__container">  
            <Category />
            <ItemList products = {items} />           
          </div>
        </div>  
      }

    </div>

  )

}

export default ItemListContainer;