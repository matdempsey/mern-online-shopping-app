import React from "react";
import { Input } from "reactstrap";
import { withRouter, useHistory } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
  const history = useHistory();

  const onSearchTextChange = (e) => {
    const searchText = encodeURIComponent(e.target.value);

    history.push(`/search/?q=${searchText}`, { searchText: searchText });
  };

  return (
    <div>
      <Input
        className="search-bar"
        type="search"
        placeholder="What are you looking for?"
        onChange={onSearchTextChange}
      />
    </div>
  );
};

export default withRouter(SearchBar);
