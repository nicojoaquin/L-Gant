import {useEffect, useState, useRef} from "react";
import { collection, getDocs } from '@firebase/firestore';
import db from "../config/firebase-config"

const useProducts = () => {

  const isMounted = useRef(true)
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {    
    getData()
    return () => {
      isMounted.current = false
    }
  },[])

  const getData = async () => {
    
    const querySnapshot = await getDocs(collection(db, "products"));
    const res = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))

    setTimeout(() => {
      if(isMounted.current) {
        setData(res)
        setLoader(false)
        }
      }, 700);
      
    
    
  }
      
    return {data, loader};
  
}

export default useProducts;