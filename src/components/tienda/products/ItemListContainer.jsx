import React, { useState, useEffect } from 'react'
import useProducts from '../../../hooks/useProducts';
import Finder from './Finder'
import Category from './Category';
import ItemList from "./Itemlist"
// import { collection, onSnapshot } from '@firebase/firestore';
// import db from "../../../firebase-config"


const ItemListContainer = () => {
 
  const {data, loader} = useProducts();
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(data)
  },[data])

  return (

    /*Cuando termina de cargar, aparecen los productos.*/
    <div className = "container">

      {
        loader ?       
          <svg 
          className = "cssload-spin-box loader"
          style = {{marginTop: 400}}>
          </svg> : 
      
        <div className = "item__container">    
          {/* <Finder items={items} setItems={setItems}/> */}
          <Category />
          <ItemList products = {items} />           
        </div>
      }

    </div>

  )

}

export default ItemListContainer;