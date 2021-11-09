import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollyFlatbed } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {totalItems} = useContext(CartContext)

  return (
    <div className = "cart-widget" >
      <Link style={{color:"black"}} to = "/cart" >
        <FontAwesomeIcon icon={faDollyFlatbed} />
        { 
          totalItems > 0 && <span> {totalItems}</span>
        }
      </Link>
    </div>
  )
}

export default CartWidget;
