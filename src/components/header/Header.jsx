import React, { useState } from "react";
import NavBar from "./NavBar";
import CartWidget from './CartWidget';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

const Header = ({title}) => {

  const [nav, setNav] = useState(false)
  const [catOpen, setCatOpen] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const closeAll = () => {
    setNav(false)
    setCatOpen(false)
  }

  return (
    <>
      <header className = "header">

        <div className = "title">
          <Link to="/"><h1 className = "title__h1" onClick={() => closeAll()}> {title} </h1></Link>
          <img src= {process.env.PUBLIC_URL + "/assets/logo.ico"} alt= "logo"/>
        </div>
              
        <div className= "header__assets">
          <NavBar nav={nav} setNav={setNav} catOpen={catOpen} setCatOpen={setCatOpen} closeAll={closeAll}/>
          <CartWidget />   
          <NavButton nav={nav} handleNav={handleNav} />
        </div>

      </header>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
