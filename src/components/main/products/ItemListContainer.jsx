import React, {useState, useEffect} from 'react'
import ItemList from "./Itemlist"
import useLoader from "../../../hooks/useLoader"


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {loading} = useLoader(); //Custom hook. 

  const products = [
    {id: 1, codeName:"sastreroGris", name: "Pantalon sastrero gris", price: 11000, category: "pantalones", img: "/assets/products/pantalon_gris.jpg" },
    {id: 2, codeName:"camisaBlanca", name: "Camisa blanca lisa", price: 7000, category: "camisas", img: "/assets/products/camisa_blanca.jpg"},
    {id: 3, codeName:"sacoNegro", name: "Saco negro liso", price: 22000, category: "sacos", img: "/assets/products/saco_negro.jpg" },
    {id: 4, codeName:"trajeRayado", name: "Traje rayado azul", price: 55000, category: "trajes", img: "/assets/products/traje_rayado_azul.jpg"}
  ]
  
  useEffect( () => {
     
    //Creamos una promesa que carga los productos..
    const getItems = new Promise((resolve, reject) => {

      let ok = true
      ok ? resolve(setItems(products)) : 
      reject("Algo ha salido mal")
      
    })
  
    getItems.then((result) => {
     return result
    })
    .catch((err) => {
      console.error(err);
    })

  }, [] )

  
  return (
    
    <div className = "container">
      <h2 className= "productos">Productos</h2>
      
      {
        loading ? <div class="cssload-spin-box"></div> : //Cuando termina de cargar, aparecen los productos.
        <div className = "item-container">
          <ItemList items= {items} /> {/* Le pasamos el estado de los productos ya cambiado(agregados). */}
        </div>
      }

    </div>
  )
}

export default ItemListContainer;
