import React, { useContext, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import CompanyLogo from "../company-logo/CompanyLogo.js";
import SearchBar from "../search/search-bar/SearchBar.js";
import basket from "../../images/icons/basket.png";
import logIn from "../../images/icons/log-in.png";

import { GlobalContext } from "../../Provider/GlobalProvider.js";

import "./HeaderBar.css";

const HeaderBar = (props) => {
  const { history, location } = props;

  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalContext);

  const handleLogin = () => {
    if (isLoggedIn) {
      fetch("/api/logout").then(setIsLoggedIn(false));
    } else {
      history.push("/login");
    }
  };

  let render = true;
  if (
    location.pathname === "/login" ||
    location.pathname === "/create-account"
  ) {
    render = false;
  }

  return (
    <>
      {render && (
        <div className="flex-hb-container">
          <div className="hb-company-logo-container">
            <CompanyLogo />
          </div>

          <div className="sb-container">
            <SearchBar />
          </div>

          <div className="flex-hb-container-right">
            <div className="basket-container">
              <Link className="hb-link" to={"/basket"}>
                <img className="basket-icon" src={basket} alt="your basket" />
                Basket
              </Link>
            </div>

            <div className="log-in-container">
              <Link className="hb-link" onClick={handleLogin}>
                <img className="log-in-icon" src={logIn} alt="log in" />
                {isLoggedIn ? "Log Out" : "Login | Create Account"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(HeaderBar);
