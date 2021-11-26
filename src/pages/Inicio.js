import React from 'react'
import HomeContainer from '../components/home/HomeContainer'
import { Fade } from 'react-awesome-reveal';

const Inicio = () => {
  return (
    <Fade>
      <main style ={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <HomeContainer />
      </main>
    </Fade>
  )
}

export default Inicio
