import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login.js";
import CreateAccount from "./components/create-account/CreateAccount.js";
import BuildPC from "./components/build-pc/BuildPC.js";
import Search from "./components/search/Search.js";
import PageNotFound from "./components/page-not-found/PageNotFound.js";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="main-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/create-account" component={CreateAccount}></Route>
            <Route path="/build-pc" component={BuildPC}></Route>
            <Route path="/search" component={Search}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
