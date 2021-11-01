import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import productsApi from '../../../api/productsApi';
import Category from './Category';
import Finder from './Finder'
import ItemList from "./Itemlist"
// import { collection, onSnapshot } from '@firebase/firestore';
// import db from "../../../firebase-config"


const ItemListContainer = () => {
 
  const {catId} = useParams()
  const [items,  setItems]  = useState([])
  const [loader, setLoader] = useState(true)

  const productsUrl = `https://my-json-server.typicode.com/nicojoaquin/productsApi/productos/`

  useEffect( () => {      
    if (catId) {
      getItemByCat(productsUrl)
    } else {
      getItems(productsUrl)
    }  
  },[catId])
  
  const getItems = async (api) => {    

    //Creamos una promesa que carga los productos.
    const res = await productsApi.get(api)
    const data = await res.data;    
    
    try {
      setTimeout( () => {
        setItems(data)
        setLoader(false)
      }, 800)       

    }
    catch(err) {
      console.warn(err);
    } 
    
    // onSnapshot(collection(db, "products"), (snapshot) => {
    //   setItems(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    //   setLoader(false)
    // })
    
  }

  const getItemByCat = async (api) => {    

    const res = await productsApi.get(api)
    const data = await res.data;    
    
    try {
      setItems(data.filter(dt => dt.category === catId)) 
      setLoader(false)     
    }
    catch(err) {
      console.warn(err);
    } 
    
    // onSnapshot(collection(db, "products"), (snapshot) => {
    //   const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    //   setItems(data.filter(dt => dt.category === catId))
    //   setLoader(false)
    // })
  
  }

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
        <Finder products = {items} />
        <Category />
          <ItemList products = {items} />           
        </div>
      }

    </div>

  )

}

export default ItemListContainer;