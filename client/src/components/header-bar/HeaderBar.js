import React, { useState } from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import SearchBar from "../common/search-bar/SearchBar.js";

import "./HeaderBar.css";

const HeaderBar = (props) => {
  const { history } = props;
  const [showHeader, setShowHeader] = useState(true);

  const handleOnClick = () => {
    history.push("/login");

    // if (history.location.pathname === "/login") {
    //   setShowHeader(false);
    //}
  };

  const handleLogInText = () => {
    //change log in text based on if user is logged in or not
  };

  return (
    showHeader && (
      <>
        <div class="flex-hb-container">
          <div className="company-logo">
            <span>COMPANY NAME</span>
          </div>
          <div className="sb-container">
            <SearchBar />
          </div>
          <div className="hb-login-btn-container">
            <Button
              className="hb-login-btn"
              color="success"
              onClick={handleOnClick}
            >
              Login
            </Button>
          </div>
        </div>
      </>
    )
  );
};

export default withRouter(HeaderBar);
