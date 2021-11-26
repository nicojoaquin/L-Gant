import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, getDocs } from "@firebase/firestore";
import db from "../config/firebase-config";

const useProducts = () => {
  const { catId, productId } = useParams();

  const [data, setData] = useState([]);

  const [items, setItems] = useState([]);

  const [item, setItem] = useState({});

  const [loader, setLoader] = useState(false);

  //Llamamos inicialmente la data.
  useEffect(() => {
    getData();
  }, []);

  //Si elegimos la categoría "all" muestra todos, y si no los filtra depende la elegida.
  useEffect(() => {
    if (catId === "all") {
      setItems(data);
    } else {
      setItems(data.filter((dt) => dt.category === catId));
    }
  }, [data, catId]);

  //LLama al item que pulsamos para ver su propia página/ruta.
  useEffect(() => {
    setItem(data.find((dt) => dt.id === productId));
  }, [data, productId]);

  const getData = async () => {
    setLoader(true);

    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const res = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(res);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoader(false);
    }
  };

  return { data, items, item, loader };
};

export default useProducts;
