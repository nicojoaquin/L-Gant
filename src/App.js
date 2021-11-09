import React from "react";
import { Route, Switch, Redirect, HashRouter as Router } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import Header from "./components/header/Header";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import ItemDetailContainer from "./components/tienda/detail/ItemDetailContainer";
import Cart from "./components/tienda/cart/Cart";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

const App = () => {

  return (
    //Layout de toda la página.
   <>
    <CartContextProvider>
      <Router>
        <Header title="L-Gant"/>
        <Switch>
          <Route exact path = "/" component={ Inicio } />
          <Route exact path = "/tienda" component={ Tienda } />
          <Route exact path = "/tienda/category/:catId" component={ Tienda } />
          <Route exact path = "/tienda/:userId" component={ ItemDetailContainer } />
          <Route exact path = "/cart" component={ Cart } />
          <Route exact path = "/nosotros" component={ Nosotros } />
          <Route exact path = "/contacto" component={ Contacto } />
          <Redirect to = "/" />
        </Switch>
      </Router>
    </CartContextProvider>     
  </>

  )

}

export default App;
