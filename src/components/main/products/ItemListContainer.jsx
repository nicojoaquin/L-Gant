import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Finder from './Finder'
import ItemList from "./Itemlist"
import PropTypes from 'prop-types';


const ItemListContainer = ({buttonText}) => {

  const [items,  setItems]  = useState([])
  const [loader, setLoader] = useState(true)
  const [active, setActive] = useState(false)

  useEffect( () => {    
    getItems()
  },[])


  const newProducto = {
    id: 5,
    codeName:"zapatoMarron",
    name: "Zapatos marrones",
    price: 16600, category: "zapatos",
    img: "/assets/products/zapato_marron.jpg"
  }
  
  const getItems = async () => {    

    //Creamos una promesa que carga los productos..
    const res = await axios.get(`${process.env.PUBLIC_URL + '/data/db.json'}`)
    const { data } = res;    
    
    try {
      setTimeout( () => {
        setItems(data)
        setLoader(false)
      }, 1000)
    }
    catch(err) {
      console.error(err);
    }  

  }

  return (
    
    <div className = "container">
      <Finder products = {items} />

      <div className = "item__container"> 

        {/*Cuando termina de cargar, aparecen los productos.*/}
        {loader ? <div className="cssload-spin-box"></div> : null}
        
          <button className= 'button'  
            disabled = {active}
            onClick= { (e) => {
              console.log(e.target);
              setItems([newProducto, ...items])
              setActive(true)
             }
            }>{buttonText}          
          </button>
          
        {/* Le pasamos el estado de los productos ya cambiado(agregados). */}
        <ItemList products = {items} />        
          
        </div>
       

  
    </div>
  )

}


ItemListContainer.propTypes = {
  buttonText: PropTypes.string.isRequired
};
  

export default ItemListContainer;