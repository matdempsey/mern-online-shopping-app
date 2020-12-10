import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderBar from "./components/header-bar/HeaderBar.js";
import NavBar from "./components/nav-bar/NavBar.js";
import Home from "./components/home/Home";
import Login from "./components/login/Login.js";
import CreateAccount from "./components/create-account/CreateAccount.js";
import BuildPC from "./components/build-pc/BuildPC.js";
import SearchResults from "./components/search/SearchResults.js";
import ProductListContainer from "./components/product-list/ProductListContainer";
import Product from "./components/product/Product.js";
import PageNotFound from "./components/page-not-found/PageNotFound.js";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="main-container">
        <Router>
          <HeaderBar />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/build-pc" component={BuildPC} />
            <Route path="/search" component={SearchResults} />

            <Route exact path="/components" component={ProductListContainer} />
            <Route path="/components/:type" component={ProductListContainer} />

            <Route path="/products/:name" component={Product} />

            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
