import React, { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import HeaderBar from "../header-bar/HeaderBar.js";
import NavBar from "../common/nav-bar/NavBar.js";
import SearchResultsCount from "../search/SearchResultsCount.js";
import SearchResultsList from "../search/SearchResultsList.js";
import Footer from "../footer/Footer.js";

const Search = () => {
  const [results, setResults] = useState([]);

  const location = useLocation();
  const { searchText } = location.state;

  useEffect(() => {
    const queryString = location.search;

    console.log("useEffect called");

    fetch(`/api/search/${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        setResults(res);
      });
  }, [searchText]);

  return (
    <div>
      <HeaderBar />
      <NavBar />
      <SearchResultsCount count={results.length} searchText={searchText} />
      <SearchResultsList />
      <Footer />
    </div>
  );
};

export default withRouter(Search);
