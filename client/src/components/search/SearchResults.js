import React from "react";
import HeaderBar from "../header-bar/HeaderBar.js";
import NavBar from "../common/nav-bar/NavBar.js";
import SearchResultsCount from "./SearchResultsCount.js";
import SearchResultsList from "./SearchResultsList.js";
import Footer from "../footer/Footer.js";

//container
const SearchResults = (props) => {
  const { location } = props;
  const { searchText, results } = location.state;

  console.log("search text = ", searchText);

  return (
    <div>
      <HeaderBar />
      <NavBar />
      <SearchResultsCount count={results.length} searchText={searchText} />
      <SearchResultsList results={results} />
      <Footer />
    </div>
  );
};

export default SearchResults;
