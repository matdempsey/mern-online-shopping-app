import React from "react";
import Slides from "../slides/Slides.js";
import Footer from "../footer/Footer.js";

import "./Home.css";
import Header from "../header-bar/Header.js";
import NavBar from "../nav-bar/NavBar.js";

const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Slides />
      <Footer />
    </div>
  );
};

export default Home;
