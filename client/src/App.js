import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import HeaderBar from "./components/header-bar/HeaderBar.js";
import NavBar from "./components/common/nav-bar/NavBar.js";
import CreateAccount from "./components/create-account/CreateAccount.js";
import Login from "./components/login/Login.js";
import ProductCatalogue from "./components/product-catalogue/product-catalogue.js";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <HeaderBar />
          <NavBar />
          <h1>React Online Shopping App</h1>
        </div>

        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/create-account" component={CreateAccount}></Route>
          <Route path="/product-catalogue" component={ProductCatalogue}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
