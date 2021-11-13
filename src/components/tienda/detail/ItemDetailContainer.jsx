import React, {useState, useEffect, useRef} from 'react';
import { useParams } from "react-router-dom";
import useProducts from '../../../hooks/useProducts';
import ItemDetail from './ItemDetail';

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
