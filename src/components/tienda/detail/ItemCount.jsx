import React from 'react'

const ItemCount = ({quantitySetted, handleAddQuantiy, handleSubQuantiy}) => {

  return (
    <div>
      <button onClick = {() => handleAddQuantiy()}>+</button>
      <span>{quantitySetted} </span>
      <button onClick = {() => handleSubQuantiy()}>-</button>
    </div>
  )
}

export default ItemCount
