import React, {useState, useEffect, useRef} from 'react';
import { useParams } from "react-router-dom";
import useProducts from '../../../hooks/useProducts';
import ItemDetail from './ItemDetail';
// import { collection, onSnapshot } from '@firebase/firestore';
// import db from "../../../firebase-config"

const ItemDetailContainer = () => {
  
  const {productId} = useParams()
  const isMounted = useRef(true)
  const {data, loader} = useProducts()
  const [item,  setItem]  = useState([])

  useEffect(() => {

    return () => {
      isMounted.current = false
    }
  },[])

  useEffect(()=> {
    if(isMounted.current) {
      setItem(data.find (dt => dt.id === productId ))  
    }
  },[data, productId])

  //   // onSnapshot(collection(db, "products"), (snapshot) => {
  //   //   const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
  //   //   setItem(data.find (dt => dt.id === userId ))
  //   //   setLoader(false)
  //   // })

  // }
  
  return (
    <div className="detail-container">
      {
        loader ?        
        <svg 
        className = "cssload-spin-box loader"
        style = {{marginTop: 400}}>
        </svg> :
        
        <ItemDetail product={item} />   
      }
    </div>

  )
}

export default ItemDetailContainer
