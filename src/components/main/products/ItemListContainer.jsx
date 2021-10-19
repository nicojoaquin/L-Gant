import React, {useState, useEffect} from 'react'
import products from '../../../data/db'
import Finder from './Finder'
import ItemList from "./Itemlist"


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loader, setLoader] = useState(true)

  const newProducto = {
    id: 5,
    codeName:"zapatoMarron",
    name: "Zapatos marrones",
    price: 16600, category: "zapatos",
    img: "/assets/products/zapato_marron.jpg"
  }
  
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
      }, 1500)
    })
    .catch((err) => {
      console.error(err);
    })
 
  },[])

  return (
    
    <div className = "container">
      <Finder products = {items} />

      {loader ? <div className="cssload-spin-box"></div> : null } 

        {/*Cuando termina de cargar, aparecen los productos.*/}
        <div className = "item__container">

          <button style = {{
            cursor: "pointer"
            }} 
            onClick={ () => 
              setItems([newProducto, ...products])}> Agregar
          </button>

          <ItemList products = {items} /> {/* Le pasamos el estado de los productos ya cambiado(agregados). */}
          
        </div>
       

  
    </div>
  )

}

  

export default ItemListContainer;
