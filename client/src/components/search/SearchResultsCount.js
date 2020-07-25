import React from "react";

import "../search/SearchResultsCount.css";

const SearchResultsCount = (props) => {
  const { count, searchText } = props;
  return (
    <div id="centre">
      <p>
        {count === 0
          ? `sorry, we couldn't find any products matching your search :(`
          : `${count} products found matching your search "${searchText}"`}
      </p>
    </div>
  );
};

export default SearchResultsCount;
