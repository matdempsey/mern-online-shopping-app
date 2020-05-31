import React, { useState } from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

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
      <div className="header-bar">
        <Button color="success" onClick={handleOnClick}>
          Login
        </Button>
      </div>
    )
  );
};

export default withRouter(HeaderBar);
