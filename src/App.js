import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import ItemDetailContainer from "./components/tienda/detail/ItemDetailContainer";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";


const App = () => {
  
  const location = useLocation()

  return (
    //Layout de toda la página.
   <>
      <Header title="L-Gant"/>
      <Switch location={location} key={location.key}>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/tienda">
          <Tienda />
        </Route>
        <Route exact path="/tienda/category/:catId">
          <Tienda />
        </Route>
        <Route path="/tienda/:userId">
          <ItemDetailContainer />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>        
  </>

  )

}

export default App;
