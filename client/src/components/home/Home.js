import React from "react";
import HeaderBar from "../header-bar/HeaderBar.js";
import NavBar from "../common/nav-bar/NavBar.js";
import Slides from "../slides/Slides";
import Footer from "../footer/Footer.js";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <HeaderBar />
      <NavBar />
      <Slides />
      <Footer />
    </div>
  );
};

export default Home;
