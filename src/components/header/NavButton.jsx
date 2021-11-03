import React from 'react'

const NavButton = ({handleNav}) => {
  return (
    <div className="bars" onClick={handleNav}>        
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  )
}

export default NavButton
