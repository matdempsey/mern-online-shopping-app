import React, { useEffect, useState } from "react";
import SearchBarDropdownList from "./SearchBarDropdownList";

import "./SearchBarDropdownContainer.css";

const SearchBarDropdownContainer = (props) => {
  const { searchText } = props;

  const [timeoutID, setTimeoutID] = useState(null);
  const [predictionResults, setPredictionResults] = useState([]);

  console.log(searchText);

  // debounce
  useEffect(() => {
    if (timeoutID) clearTimeout(timeoutID); // when hook called, cancel any previous timeout by id

    const id = setTimeout(() => {
      fetch(`/api/products/${searchText}`)
        .then((res) => res.json())
        .then((res) => setPredictionResults(res));
    }, 1000);

    setTimeoutID(id);
  }, [searchText]);

  return (
    <div className="sb-dd-container">
      <SearchBarDropdownList
        predictionResults={predictionResults}
        searchText={searchText}
      />
    </div>
  );
};

export default SearchBarDropdownContainer;
