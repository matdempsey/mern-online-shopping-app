import React, { useEffect, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import CompanyLogo from "../company-logo/CompanyLogo.js";
import SearchBar from "../search/search-bar/SearchBar.js";

import basket from "../../images/icons/basket.png";
import logIn from "../../images/icons/log-in.png";

import "./Header.css";
import { GlobalContext } from "../../provider/GlobalProvider.js";

const Header = (props) => {
  const { history, location } = props;

  const { isAuthenticated, setIsAuthenticated } = useContext(GlobalContext);

  // on location path change and while user is logged in, send request to verify that the current session hasn't expired.
  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sid: localStorage.getItem("_sid") }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.expired) {
            localStorage.removeItem("_sid");
            setIsAuthenticated(false);
          }
        });
    }
  }, [location.pathname]);

  const handleLogin = () => {
    if (isAuthenticated) {
      fetch("/api/logout").then(() => {
        localStorage.removeItem("_sid");
        setIsAuthenticated(false);
      });
    } else {
      history.push("/login");
    }
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
              <img className="basket-icon" src={basket} alt="your basket" />
              Basket
            </Link>
          </div>

          <div className="log-in-container">
            <Link className="hb-link" onClick={handleLogin}>
              <img className="log-in-icon" src={logIn} alt="log in" />
              {isAuthenticated ? "Log Out" : "Login | Create Account"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
