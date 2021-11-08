import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollyFlatbed } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div className = "cart-widget" >
      <Link style={{color:"black"}} to = "/cart" >
        <FontAwesomeIcon icon={faDollyFlatbed} />
      </Link>
    </div>
  )
}

export default CartWidget;
