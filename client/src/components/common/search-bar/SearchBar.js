import React from "react";
import { Input } from "reactstrap";

const SearchBar = (props) => {
  const onSearchTextChange = () => {
    console.log("search text has changed");
  };

  return <Input type="search" onChange={onSearchTextChange} />;
};

export default SearchBar;
