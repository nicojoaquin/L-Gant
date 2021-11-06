import React from 'react'

const NavButton = ({nav, handleNav}) => {
  return (
    <div className="bars" onClick={handleNav}>        
      <span className={`bar ${nav && "barTop"}`}></span>
      <span className={`bar ${nav && "barMid"}`}></span>
      <span className={`bar ${nav && "barBottom"}`}></span>
    </div>
  )
}

export default NavButton
