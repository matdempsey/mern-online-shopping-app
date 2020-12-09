import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login.js";
import CreateAccount from "./components/create-account/CreateAccount.js";
import BuildPC from "./components/build-pc/BuildPC.js";
import SearchResults from "./components/search/SearchResults.js";
import PageNotFound from "./components/page-not-found/PageNotFound.js";
import ProductContainer from "./components/product/ProductContainer";
import Product from "./components/product/Product";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="main-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/build-pc" component={BuildPC} />
            <Route path="/search" component={SearchResults} />

            <Route exact path="/components" component={ProductContainer} />
            <Route path="/components/:type" component={ProductContainer} />

            <Route path="/products/:name" component={Product} />

            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
