import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import CompanyLogo from "../common/company-logo/CompanyLogo.js";
import SearchBar from "../common/search-bar/SearchBar.js";
import basket from "./../../images/basket.png";

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
      <div class="flex-hb-container">
        <div className="hb-company-logo-container">
          <CompanyLogo />
        </div>
        <div className="sb-container">
          <SearchBar />
        </div>
        <div className="flex-hb-container-right">
          <Link className="hb-link" to={"/login"}>
            log-in/create account
          </Link>
          <img
            className="basket"
            src={basket}
            alt="your basket"
            onClick={handleOnBasketClick}
          ></img>
          <span className="basket-count"> 0</span>
        </div>
      </div>
    </>
  );
};

export default withRouter(HeaderBar);
