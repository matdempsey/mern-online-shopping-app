import React from "react";
import SearchResultsListItem from "../search/SearchResultsListItem.js";
import { ListGroup } from "reactstrap";

const SearchResultsList = (props) => {
  const { results } = props;

  console.log("results list = ", results);

  return (
    <div>
      <ListGroup>
        {results.map((ele, idx) => (
          <SearchResultsListItem
            key={idx}
            name={ele.name}
            price={ele.price}
            qty={ele.qty}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default SearchResultsList;
