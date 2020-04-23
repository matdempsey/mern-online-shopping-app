import React from "react";
import { Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./HeaderBar.css";

const HeaderBar = (props) => {
  const { history } = props;

  const handleOnClick = () => {
    history.push("/login");
  };

  const handleLogInText = () => {
    //change log in text based on if user is logged in or not
  };

  return (
    <div className="header-bar">
      <Nav>
        <NavItem>
          <Button color="success" onClick={handleOnClick}>
            Login
          </Button>
        </NavItem>
      </Nav>
    </div>
  );
};

export default withRouter(HeaderBar);
