import React from "react";

const SearchResultsCount = (props) => {
  const { count, searchText } = props;
  return (
    <div>
      {count === 0
        ? `sorry, we couldn't find any products matching your search :(`
        : `${count} products found matching your search "${searchText}"`}
    </div>
  );
};

export default SearchResultsCount;
