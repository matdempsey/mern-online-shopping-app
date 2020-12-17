import React, { useState } from "react";
import SearchContext from "../context/SearchContext.js";
import { Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import SearchBarDropdownContainer from "../search-bar-dropdown/SearchBarDropdownContainer.js";
import searchButton from "../../../images/search-btn.png";

import "./SearchBar.css";

const SearchBar = (props) => {
  const { history } = props;

  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchProducts = (text) => {
    const query = encodeURIComponent(text);

    fetch(`/api/search/?q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        history.push({
          pathname: "/search",
          search: `q=${text}`,
          state: { searchText: text, results: res },
        });
      });
  };

  const toggleDropdownVisibility = () => {
    setShowDropdown((currState) => !currState);
  };

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
    setShowDropdown(true);
  };

  const onSearchButtonClick = () => {
    toggleDropdownVisibility();
    fetchProducts(searchText);
  };

  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleDropdownVisibility();
      fetchProducts(searchText);
    }
  };

  return (
    <>
      <SearchContext.Provider
        value={{ toggleDropdownVisibility, fetchProducts }}
      >
        <div className="flex-search-bar-container">
          <Input
            className="search-bar"
            value={searchText}
            placeholder="What are you looking for?"
            onChange={onSearchTextChange}
            onKeyDown={onEnterKeyPress}
          />
          <img
            className="search-btn"
            src={searchButton}
            alt="search button"
            onClick={onSearchButtonClick}
          />
        </div>
        {showDropdown && <SearchBarDropdownContainer searchText={searchText} />}
      </SearchContext.Provider>
    </>
  );
};

export default withRouter(SearchBar);
