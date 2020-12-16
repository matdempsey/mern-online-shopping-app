import React from "react";
import { withRouter } from "react-router-dom";
import SearchBarDropdownListItem from "../search-bar-dropdown/SearchBarDropdownListItem.js";

import "./SearchBarDropdownList.css";

const SearchBarDropdownList = (props) => {
  const { predictionResults, searchText, fetchProducts, history } = props;
  const maxNumOfResults = 5;

  const handleListItemClick = (name) => {
    history.push(`/products/${name}`);
  };

  const handleShowAllResultsBtnClick = () => fetchProducts(searchText);

  return (
    <div>
      <ul className="sb-dd-list">
        {predictionResults.map((result, idx) => {
          if (idx < maxNumOfResults) {
            return (
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
            );
          }
        })}

        {predictionResults.length > maxNumOfResults && (
          <div className="sb-dd-show-all-results-container">
            <span
              className="show-all-results-btn"
              onClick={handleShowAllResultsBtnClick}
            >
              show all results
            </span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default withRouter(SearchBarDropdownList);
