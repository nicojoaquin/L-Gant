import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

const Buttons = ({buttonText, setItems, items}) => {
  
  const [disabled, setDisabled] = useState(false)
  const addButton = useRef();

  const newProduct = {
    id: null,
    name: "Zapatos marrones",
    price: 16600, 
    category: "zapatos",
    img: "/assets/products/zapato_marron.jpg"
  }

  const addProduct = () => {
    newProduct.id = items.length + 1
    setItems([newProduct, ...items])
    setDisabled(true)
  }

  return (

    <div className= "buttons">

        <button 
          className = 'addButton' 
          ref = {addButton} 
          disabled = {disabled}
          onClick = { (e) => addProduct()
          }>{buttonText}          
        </button>

        <button
          className = "changeColor" 
          disabled = {disabled}
          onClick = { () => {
            addButton.current.style.background = "green"
          }}
          >Cambiar color
        </button>

    </div>

  )

}

Buttons.propTypes = {
  buttonText: PropTypes.string.isRequired,
  setItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default Buttons
