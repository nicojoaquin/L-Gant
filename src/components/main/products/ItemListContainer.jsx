import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Finder from './Finder'
import ItemList from "./Itemlist"


const ItemListContainer = () => {

  const [items,  setItems]  = useState([])
  const [loader, setLoader] = useState(true)
  const [active, setActive] = useState(false)

  useEffect( () => {    
    getItems()
  },[])


  const newProducto = {
    id: 5,
    codeName:"zapatoMarron",
    name: "Zapatos marrones",
    price: 16600, category: "zapatos",
    img: "/assets/products/zapato_marron.jpg"
  }
  
  const getItems = async () => {    

    //Creamos una promesa que carga los productos..
    await axios.get(`${process.env.PUBLIC_URL + '/data/db.json'}`)
    .then(res => {    
      setTimeout( () => {
        setItems(res.data.products)
        setLoader(false)
      }, 1000)
    })
    .catch(err => console.error(err));

  }

  return (
    
    <div className = "container">
      <Finder products = {items} />

      <div className = "item__container"> 

        {/*Cuando termina de cargar, aparecen los productos.*/}
        {loader ? <div className="cssload-spin-box"></div> : 
          <button  
            disabled = {active}
            onClick= { () => {
              setItems([newProducto, ...items])
              setActive(true)
             }
            }> Agregar          
          </button>
        }
          
        {/* Le pasamos el estado de los productos ya cambiado(agregados). */}
        <ItemList products = {items} />        
          
        </div>
       

  
    </div>
  )

}

  

export default ItemListContainer;