import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import productsApi from '../../../api/productsApi';
import Category from './Category';
import Finder from './Finder'
import ItemList from "./Itemlist"


const ItemListContainer = () => {
 
  const {catId} = useParams()
  const [items,  setItems]  = useState([])
  const [category, setCategory] = useState()
  const [loader, setLoader] = useState(true)

  const productsUrl = `https://my-json-server.typicode.com/nicojoaquin/productsApi/productos/`

  useEffect( () => {      
    if (category) {
      getItemByCat(productsUrl)
    } 
     else getItems(productsUrl)  
  },[catId])
  
  const getItems = async (api) => {    

    //Creamos una promesa que carga los productos..
    const res = await productsApi.get(api)
    const data = await res.data;    
    
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

  const getItemByCat = async (api) => {    
    
    const res = await productsApi.get(api)
    const data = await res.data;

    try {
      setTimeout( () => {
        setCategory(data.filter(dt => dt.category === catId))
      }, 800)       
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
      <Category />
        <ItemList products = {items} />           
      </div>
    
    </div>

  )

}

export default ItemListContainer;