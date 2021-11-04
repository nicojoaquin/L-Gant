import React, { useEffect, useState } from 'react'

const Finder = ({items, setItems}) => {
  
  const [input, setInput] = useState("")

  const handleInput = ({target}) => {
    setInput(target.value)
    filtro()
  }

  const filtro = () => {
    let busqueda = items.filter(el => {
      if (el.name.toString().toLowerCase().includes(input.toLowerCase())) {
        return el
      }
    })
    setItems(busqueda)
  }

  return (
    <div className= "finder">
      <input onChange={handleInput} type="text" placeholder= " Buscar..." />
    </div>
  )

}

export default Finder