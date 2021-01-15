import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/header/Header.js";
import NavBar from "./components/nav-bar/NavBar.js";
import Home from "./components/home/Home";
import Login from "./components/login/Login.js";
import CreateAccount from "./components/create-account/CreateAccount.js";
import BuildPC from "./components/build-pc/BuildPC.js";
import SearchResults from "./components/search/search-results/SearchResults.js";
import ProductListContainer from "./components/product-list/ProductListContainer";
import Product from "./components/product/Product.js";
import PageNotFound from "./components/page-not-found/PageNotFound.js";
import PrivateRoute from "./routes/PrivateRoute.js";
import AccountDetails from "./components/account-details/AccountDetails.js";
import Checkout from "./components/checkout/Checkout.js";

import { GlobalProvider } from "./provider/GlobalProvider.js";

import "./App.css";

export const AppContext = createContext();

const App = () => {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Router>
          {/* <Header /> */}
          {/* <NavBar /> */}
          <Switch>
            <PrivateRoute path="/account-details">
              <AccountDetails />
            </PrivateRoute>

            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>

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
    </GlobalProvider>
  );
};

export default App;
