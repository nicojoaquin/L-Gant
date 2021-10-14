import React from "react";
import Layout from "./layout"
import Header from "./components/header/header";
import Main from "./components/main/main";

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