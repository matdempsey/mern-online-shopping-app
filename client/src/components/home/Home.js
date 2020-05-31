import React from "react";
import HeaderBar from "../header-bar/HeaderBar.js";
import NavBar from "../common/nav-bar/NavBar.js";
import Slides from "../slides/Slides";

const Home = () => {
  return (
    <>
      <div>
        <HeaderBar />
        <NavBar />
        <Slides />
      </div>
    </>
  );
};

export default Home;
