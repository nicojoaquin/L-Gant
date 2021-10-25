import React, {useState, useEffect} from 'react'
import productsApi from '../../../api/productsApi';
import Finder from './Finder'
import Buttons from './Buttons';
import ItemList from "./Itemlist"


const ItemListContainer = () => {

  const [items,  setItems]  = useState([])
  const [loader, setLoader] = useState(true)

  useEffect( () => {    
    getItems()
  },[])

  
  const getItems = async () => {    

    //Creamos una promesa que carga los productos..
    const res = await productsApi.get(`${process.env.PUBLIC_URL + '/data/db.json'}`)
    const { data } = res;    
    
    try {
      setTimeout( () => {
        setItems(data)
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
      <Buttons 
        buttonText = "Agregar producto" 
        setItems = {setItems} 
        items = {items} 
      />

      <div className = "item__container">    
      
        <ItemList products = {items} />            

      </div>
    
    </div>

  )

}

export default ItemListContainer;