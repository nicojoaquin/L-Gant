import React from "react";
import Layout from "./Layout"
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {

  return (
    //Layout de toda la página.
   
    <Layout 
      style = {{
        display: "flex",
        flexDirection: "column"
      }}>
          
      <Header title= "L-Gant" />
      <Main />
      {/* <Footer /> */}

    </Layout> 

  )

}

export default App;
