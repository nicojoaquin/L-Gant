import {useEffect, useState, useRef} from "react";
import { useParams } from "react-router";
import productsApi from "../api/productsApi";

const useProducts = () => {

  const {catId} = useParams()
  const isMounted = useRef(true)
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    return () => {
      isMounted.current = false
    }
  },[])

  useEffect(() => {    
    getData()
  },[catId])

  const getData = async () => {

    //Creamos una promesa que carga los productos.   
    const res = await productsApi.get();
    const resp = await res.data;    
    
    try {
            setTimeout( () => {      
              if(isMounted.current) {
                setData(resp)  
                setLoader(false)
              }  
            },700) 
      }  
      catch(err) {
        console.warn(err);
      }
      
  }
      
    return {data, loader};
  
}

export default useProducts;