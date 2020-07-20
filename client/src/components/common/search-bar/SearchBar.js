import React, { useState } from "react";
import { Input } from "reactstrap";
import { withRouter, useHistory, useLocation } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();

  const onSearchTextChange = (e) => {
    const searchText = e.target.value;
    history.push(`/search/?q=${searchText}`);
  };

  return (
    <div>
      <Input
        type="search"
        placeholder="What are you looking for?"
        onChange={onSearchTextChange}
      />
    </div>
  );
};

export default withRouter(SearchBar);
