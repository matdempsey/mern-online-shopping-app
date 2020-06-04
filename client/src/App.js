import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login.js";
import CreateAccount from "./components/create-account/CreateAccount.js";
import ProductCatalogue from "./components/product-catalogue/product-catalogue.js";
import PartPicker from "./components/part-picker/PartPicker.js";

import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/create-account" component={CreateAccount}></Route>
            <Route
              path="/product-catalogue"
              component={ProductCatalogue}
            ></Route>
            <Route path="/build-pc" component={PartPicker}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
