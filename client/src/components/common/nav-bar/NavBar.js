import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const navLinks = [
  {
    text: "Build Custom PC",
    path: "/build-pc",
  },
  {
    text: "Processors",
    path: "/",
  },
  {
    text: "Graphics Cards",
    path: "/",
  },
  {
    text: "Memory",
    path: "/",
  },
  {
    text: "Storage",
    path: "/",
  },
  {
    text: "Monitors",
    path: "/",
  },
  {
    text: "Peripherals",
    path: "/",
  },
];

const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="flex-navbar">
        {navLinks.map((link) => {
          return (
            <li className="navbar-li">
              <Link className="navbar-link" to={link.path}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
