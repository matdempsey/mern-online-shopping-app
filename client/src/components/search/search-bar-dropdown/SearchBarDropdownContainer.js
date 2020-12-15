import React, { useEffect, useState } from "react";
import SearchBarDropdownList from "./SearchBarDropdownList";

import "./SearchBarDropdownContainer.css";

const SearchBarDropdownContainer = (props) => {
  const { searchText } = props;

  const [predictionResults, setPredictionResults] = useState([]);

  useEffect(() => {
    fetch(`/api/products/${searchText}`)
      .then((res) => res.json())
      .then((res) => setPredictionResults(res));
  }, [searchText]);

  return (
    <div className="sb-dd-container">
      <SearchBarDropdownList predictionResults={predictionResults} />
    </div>
  );
};

export default SearchBarDropdownContainer;
