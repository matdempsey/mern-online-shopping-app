import React, { useEffect, useState } from "react";
import HeaderBar from "../common/header-bar/HeaderBar.js";
import NavBar from "../common/nav-bar/NavBar.js";
import SearchResultsCount from "./SearchResultsCount.js";
import ProductsList from "../product/ProductList.js";
import Footer from "../footer/Footer.js";

const SearchResults = (props) => {
  const { location } = props;
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  // handles user manually entering in the url (i.e. /search?q=someValue) where location.state will be undefined -- causing crash.
  useEffect(() => {
    // user has manually inputted
    if (location.state === undefined) {
      const queryString = new URLSearchParams(location.search);
      const parsedSearchText = queryString.get("q");
      setSearchText(parsedSearchText);

      fetch(`/api/search/${location.search}`)
        .then((res) => res.json())
        .then((res) => setResults(res))
        .catch((err) => console.log(err));
    } else {
      const { searchText, results } = location.state;
      setSearchText(searchText);
      setResults(results);
    }
  }, [location.key]);

  return (
    <div>
      <HeaderBar />
      <NavBar />
      <SearchResultsCount count={results.length} searchText={searchText} />
      <ProductsList products={results} />
      <Footer />
    </div>
  );
};

export default SearchResults;
