import React, { useState } from "react";
import NavBar from "./NavBar";
import CartWidget from './CartWidget';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Header = ({title}) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(true)
    nav && setNav(false)
  }

  return (
    <>
      <header className = "header">

        <div className = "title">
          <Link to="/"><h1 className = "title__h1"> {title} </h1></Link>
          <img src= {process.env.PUBLIC_URL + "/assets/logo.ico"} alt= "logo"/>
        </div>

        <div className= "header__assets">
          <NavBar nav={nav} setNav={setNav}/>
          <CartWidget />   
          <div className="bars" onClick={handleNav}>        
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

      </header>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
