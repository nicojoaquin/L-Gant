import React from "react";
import NavBar from "./NavBar";
import CartWidget from './CartWidget';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Header = ({title}) => {

  return (
    <>
      <header className = "header">

        <div className = "title">
          <Link to="/"><h1 className = "title__h1"> {title} </h1></Link>
          <img src= {process.env.PUBLIC_URL + "/assets/logo.ico"} alt= "logo"/>
        </div>

        <div className= "header__assets">
          <NavBar />
          <CartWidget />   
        </div>

      </header>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
