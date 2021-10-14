import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollyFlatbed } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div className = "cart-widget" >
      <FontAwesomeIcon icon={faDollyFlatbed} />
    </div>
  )
}

export default CartWidget;