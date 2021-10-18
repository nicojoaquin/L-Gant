import {useState} from 'react'

const useLoader = () => {

  const [state, setState] = useState({
    loading: true
  });
  
  //Le asignamos el tiempo que tarda en pasar a ser falso, para renderizar los productos una vez que termina.
  setTimeout( () => {
    setState( {
      loading: false
    })
  }, 2000)

  return state
}

export default useLoader;