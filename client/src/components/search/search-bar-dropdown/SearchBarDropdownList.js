import React from "react";
import { withRouter } from "react-router-dom";
import SearchBarDropdownListItem from "../search-bar-dropdown/SearchBarDropdownListItem.js";

import "./SearchBarDropdownList.css";

const SearchBarDropdownList = (props) => {
  const { predictionResults, history } = props;

  const handleListItemClick = (name) => {
    history.push(`/products/${name}`);
  };

  return (
    <div>
      <ul className="sb-dd-list">
        {predictionResults.map((result) => (
          <li
            key={result.name}
            className="sb-dd-li"
            onClick={() => {
              handleListItemClick(result.name);
            }}
          >
            <SearchBarDropdownListItem
              name={result.name}
              price={result.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(SearchBarDropdownList);
