import { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "@firebase/firestore";
import db from "../config/firebase-config";

const useProducts = () => {
  const isMounted = useRef(true);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const getData = async () => {
    setLoader(true);

    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const res = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (isMounted.current) {
        setData(res);
      }
    } catch (err) {
      console.warn(err);
    } finally {
      setLoader(false);
    }
  };

  return { data, loader };
};

export default useProducts;
