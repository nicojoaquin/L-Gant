import React, {useState, useEffect} from 'react'
import products from '../../../data/db'
// import useLoader from "../../../hooks/useLoader"
import ItemList from "./Itemlist"


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loader, setLoader] = useState(true)
  
  useEffect( () => {
     
    //Creamos una promesa que carga los productos..
    const getItems = new Promise((resolve, reject) => {

      let ok = true
      ok ? resolve(products) : 
      reject("Algo ha salido mal")
      
    })
  
    getItems.then((result) => {
      setTimeout( () => {
        setItems(result)
        setLoader(false)
      }, 2000)
    })
    .catch((err) => {
      console.error(err);
    })
 
  },[])

  return (
    
    <div className = "container">
      <h2 className= "productos">Productos</h2>
      
      {
        loader ? <div className="cssload-spin-box"></div> : //Cuando termina de cargar, aparecen los productos.
        <div className = "item-container">
          <ItemList products = {items} /> {/* Le pasamos el estado de los productos ya cambiado(agregados). */}
        </div>
      }
  
    </div>
  )

}

  

export default ItemListContainer;
