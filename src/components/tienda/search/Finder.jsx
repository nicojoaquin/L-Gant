import React, {useState} from 'react'
import { useHistory } from 'react-router'

const Finder = ({closeAll}) => {
  
  const [input, setInput] = useState("")
  const history = useHistory()

  const handleInput = ({target}) => {
    setInput(target.value)
    // Le damos valor al input sobre lo que escribimos.
  }

  const filtro = (e) => {
    e.preventDefault()
    closeAll()
    setInput("")
    history.push(`/search?q=${input}`)
    // Al hacer submit, limpiamos el input y navegamos al componente Search con el query asignado al valor del input. 
  }

  return (
    <form className= "finder" onSubmit = {filtro}>
      <input onChange={handleInput} type="text" placeholder= " Buscar..." value = {input} />
    </form>
  )

}

export default Finder