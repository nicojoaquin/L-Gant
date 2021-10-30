import React, {useState, useEffect} from 'react'
import productsApi from '../../../api/productsApi';
import Finder from './Finder'
import ItemList from "./Itemlist"


const ItemListContainer = () => {

  const [items,  setItems]  = useState([])
  const [loader, setLoader] = useState(true)

  useEffect( () => {    
    getItems()
  },[])

  
  const getItems = async () => {    

    //Creamos una promesa que carga los productos..
    const res = await productsApi.get(`https://my-json-server.typicode.com/nicojoaquin/productsApi/productos/`)
    const { data } = res;    
    
    try {
      setTimeout( () => {
        setItems(data)
      }, 800)       
      setTimeout( () => {
        setLoader(false)
      }, 1000)
    }
    catch(err) {
      console.warn(err);
    }  

  }

  return (

    loader ?        
        <svg 
          className = "cssload-spin-box loader"
          style = {{marginTop: 400}}>
        </svg> :
        
    /*Cuando termina de cargar, aparecen los productos.*/
    <div className = "container">
           
      <Finder products = {items} />
      <div className = "item__container">    
        <ItemList products = {items} />           
      </div>
    
    </div>

  )

}

export default ItemListContainer;