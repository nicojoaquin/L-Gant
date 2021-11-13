import {useEffect, useState, useRef} from "react";
import { collection, onSnapshot } from '@firebase/firestore';
import db from "../firebase-config"

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
    
    setTimeout(() => {
      
      onSnapshot(collection(db, "products"), (snapshot) => {
        const res = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
        setData(res)
        setLoader(false)
      })
    }, 700);
      
  }
      
    return {data, loader};
  
}

export default useProducts;