import React, { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import HeaderBar from "../header-bar/HeaderBar.js";
import NavBar from "../common/nav-bar/NavBar.js";
import SearchResultsList from "../search/SearchResultsList.js";
import Footer from "../footer/Footer.js";

const Search = () => {
  const [results, setResults] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const queryString = location.search;

    console.log("queryString=", queryString);

    fetch(`/api/search/${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        setResults(res);
      });
  }, []); // need to add dependency

  return (
    <div>
      <HeaderBar />
      <NavBar />
      <SearchResultsList />
      <Footer />
    </div>
  );
};

export default withRouter(Search);
