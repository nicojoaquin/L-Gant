import React from 'react'

const Main = ({text}) => {

  return (

    <>
    <div style={{marginTop: 120, display: "flex", justifyContent: "center"}}>
     {text === undefined ? null : (
     <h2 style={{color: "black"}}>{text}</h2>)}
    </div>
    </>
    
  )

}

export default Main