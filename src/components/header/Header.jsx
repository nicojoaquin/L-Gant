import React from "react";
import NavBar from "./NavBar";
import CartWidget from './CartWidget';
import Auth0 from "./auth0/Auth0";

const Header = ({title}) => {

  return (

    <header className = "header">

      <div className = "title">
        <a href="/index.html"><h1 className = "title__h1"> {title} </h1></a>
        <img src= {process.env.PUBLIC_URL + "/assets/logo.ico"} alt= "logo"/>
      </div>

      <div className= "header__assets">
        <NavBar />
        <CartWidget />
        <Auth0 />    
      </div>

    </header>

  )
}

export default Header;
