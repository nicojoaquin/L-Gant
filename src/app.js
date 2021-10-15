import React from "react";
import Layout from "./Layout"
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {

  return (
    
    <Layout>

      <Header title= "ALF-ARG" />
      <Main text = "Contenido de la página" />
      {/* <Footer /> */}

    </Layout> 

  )

}

export default App;