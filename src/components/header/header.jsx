import React from "react";
import NavBar from "./NavBar";
import logo from "../../assets/logo.ico"

const Header = ({title}) => {

  return (

    <header className = "header">

      <div className = "title">
        <h1 className = "title__h1"> {title} </h1>
        <img src= {logo} alt= "logo"/>
      </div>

      <NavBar />    

    </header>

  )
}

export default Header;