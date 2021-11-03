import React, {useState, useEffect, useRef} from 'react';
import { useParams } from "react-router-dom";
import productsApi from '../../..//api/productsApi';
import ItemDetail from './ItemDetail';
// import { collection, onSnapshot } from '@firebase/firestore';
// import db from "../../../firebase-config"

const ItemDetailContainer = () => {
  
  const {userId} = useParams()
  const isMounted = useRef(true)
  const [item,  setItem]  = useState([])
  const [loader, setLoader] = useState(true)

  const productUrl = `https://my-json-server.typicode.com/nicojoaquin/productsApi/productos/` 

  useEffect(() => {

    return () => {
      isMounted.current = false
    }
  },[])
  
  useEffect( () => {    
    getItem()
  },[])

  const getItem = async () => {    

    const res = await productsApi.get( productUrl + userId )
    const data = await res.data  
    
    try {
      if(isMounted.current) {
        setItem(data)
        setLoader(false)           
      }
    }
    catch(err) {
      console.warn(err);
    }  

    // onSnapshot(collection(db, "products"), (snapshot) => {
    //   const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    //   setItem(data.find (dt => dt.id === userId ))
    //   setLoader(false)
    // })

  }
  
  return (
    <div className="detail-container">
      {
        loader ?        
        <svg 
        className = "cssload-spin-box loader"
        style = {{marginTop: 400}}>
        </svg> :
        
        <ItemDetail item={item} />   
      }
    </div>

  )
}

export default ItemDetailContainer
