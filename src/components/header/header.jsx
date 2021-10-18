import React from "react";
import NavBar from "./NavBar";

const Header = ({title}) => {

  return (

    <header className = "header">

      <div className = "title">
        <h1 className = "title__h1"> {title} </h1>
        <img src= {process.env.PUBLIC_URL + "/assets/logo.ico"} alt= "logo"/>
      </div>

      <NavBar />    

    </header>

  )
}

export default Header;