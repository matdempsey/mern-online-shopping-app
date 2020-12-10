import React, { useState } from "react";
import { Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import searchButton from "../../images/search-btn.png";

import "./SearchBar.css";

const SearchBar = (props) => {
  const { history } = props;

  const [searchText, setSearchText] = useState("");

  const fetchProducts = (text) => {
    const query = encodeURIComponent(text);

    fetch(`/api/search/?q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        history.push({
          pathname: "/search",
          search: `q=${searchText}`,
          state: { searchText: searchText, results: res },
        });
      });
  };

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearchButtonClick = () => {
    fetchProducts(searchText);
  };

  const onEnterKey = (e) => {
    if (e.key === "Enter") {
      fetchProducts(searchText);
    }
  };

  return (
    <div className="flex-search-bar-container">
      <Input
        className="search-bar"
        value={searchText}
        placeholder="What are you looking for?"
        onChange={onSearchTextChange}
        onKeyDown={onEnterKey}
      />
      <img
        className="search-btn"
        src={searchButton}
        alt="search button"
        onClick={onSearchButtonClick}
      />
    </div>
  );
};

export default withRouter(SearchBar);