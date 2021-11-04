import {useEffect, useState, useRef} from "react";
import { useParams } from "react-router";
import productsApi from "../api/productsApi";

const useProducts = () => {

  const {catId} = useParams()
  const [data, setData] = useState([])
  const [detailData, setDetailData] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {    
    getData()
  },[catId])

  const getData = async () => {

    //Creamos una promesa que carga los productos.
    const res = await productsApi.get();
    const resp = await res.data;    
    
    try {
      setDetailData(resp)
      if(catId) {          
          setData(resp.filter(dt => dt.category === catId))                      
        } else {
            setTimeout( () => {        
              setData(resp)       
              setLoader(false)
            },300) 
        } 
      }  
      catch(err) {
        console.warn(err);
      } 
      
  }
       
    return {data, loader, detailData};
  
}

export default useProducts;