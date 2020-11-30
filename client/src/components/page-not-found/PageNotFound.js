import React from "react";
import { Link } from "react-router-dom";
import HeaderBar from "../header-bar/HeaderBar";

import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div>
      <HeaderBar />
      <div className="page-not-found-container">
        <h1 className="page-not-found-heading">404</h1>
        <h2 className="page-not-found-sub-heading">
          Page not found
          <span role="img" aria-label="pensive face">
            😔
          </span>
        </h2>
        <p className="page-not-found-error-msg">
          Sorry, we were unable to find the page you were looking for..
        </p>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
