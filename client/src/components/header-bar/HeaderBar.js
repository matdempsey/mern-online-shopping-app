import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import CompanyLogo from "../common/company-logo/CompanyLogo.js";
import SearchBar from "../common/search-bar/SearchBar.js";
import basket from "./../../images/basket.png";
import logIn from "./../../images/log-in.png";

import "./HeaderBar.css";

//To Do:
// - if user logged in replace link/create to "log-out"

const HeaderBar = (props) => {
  const { history } = props;
  const [showHeader, setShowHeader] = useState(true);

  const changeLogInText = () => {};

  const handleOnBasketClick = () => {
    history.push("/basket");
  };

  return (
    <>
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
              <img
                className="basket-icon"
                src={basket}
                alt="your basket"
                onClick={handleOnBasketClick}
              />
              basket
            </Link>
          </div>

          <div className="log-in-container">
            <Link className="hb-link" to={"/login"}>
              <img className="log-in-icon" src={logIn} alt="log in" />
              log-in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(HeaderBar);
