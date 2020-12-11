import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./NavBar.css";

const navLinks = [
  {
    text: "Build Custom PC",
    path: "/build-pc",
  },
  {
    text: "Processors",
    path: "/components/processors",
  },
  {
    text: "Graphics Cards",
    path: "/components/graphics-cards",
  },
  {
    text: "Memory",
    path: "/components/memory",
  },
  {
    text: "Storage",
    path: "/components/storage",
  },

  {
    text: "Peripherals",
    path: "/components/peripherals",
  },
];

const NavBar = (props) => {
  const { location } = props;

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
        <div className="navbar-container">
          <ul className="flex-navbar">
            {navLinks.map((link, idx) => {
              return (
                <li key={idx} className="navbar-li">
                  <Link className="navbar-link" to={link.path}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default withRouter(NavBar);