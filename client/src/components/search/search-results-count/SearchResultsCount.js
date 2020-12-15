import React from "react";

import "./SearchResultsCount.css";

const SearchResultsCount = (props) => {
  const { count, searchText } = props;
  return (
    <div className="results-count">
      <p>
        {count === 0
          ? `sorry, we couldn't find any products matching your search "${searchText}"`
          : `${count} products found matching your search "${searchText}"`}
      </p>
    </div>
  );
};

export default SearchResultsCount;
