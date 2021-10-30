import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import productsApi from '../../..//api/productsApi';

const ItemDetailContainer = () => {
  
  const {userId} = useParams()
  const [item,  setItem]  = useState([])
  const [loader, setLoader] = useState(true)

  useEffect( () => {    
    getItem()
  },[])

  const getItem = async () => {    

    //Creamos una promesa que carga los productos..
    const res = await productsApi.get(`https://my-json-server.typicode.com/nicojoaquin/productsApi/productos/${userId}`)
    const { data } = res  
    
    try {
      setTimeout( () => {
        setItem(data)
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
    <section>
      {
        loader ?        
        <svg 
        className = "cssload-spin-box loader"
        style = {{marginTop: 400}}>
        </svg> :
        
        <div 
        className = "item" 
        onClick= { () => console.log(item) }
        style = {{
          backgroundImage: `url(${process.env.PUBLIC_URL + item.img})`
        }}>
          <div className= "item__info">
            <h3 className = "item__name" >{item.name}</h3>
            <h4 className = "item__price" >${item.price}</h4>
          </div>  
        </div>
        
      }
    </section>

  )
}

export default ItemDetailContainer
