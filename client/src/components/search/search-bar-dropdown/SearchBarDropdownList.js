import React, { useContext } from "react";
import SearchContext from "../context/SearchContext.js";
import { withRouter } from "react-router-dom";
import SearchBarDropdownListItem from "../search-bar-dropdown/SearchBarDropdownListItem.js";

import "./SearchBarDropdownList.css";

const SearchBarDropdownList = (props) => {
  const { predictionResults, searchText, history } = props;

  const { toggleDropdownVisibility, fetchProducts } = useContext(SearchContext);

  const maxNumOfResults = 5;

  const handleListItemClick = (name) => {
    toggleDropdownVisibility();
    history.push(`/products/${encodeURIComponent(name)}`);
  };

  const handleShowAllResultsBtnClick = () => {
    toggleDropdownVisibility();
    fetchProducts(searchText);
  };

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
                  imagePath={result.imagePath}
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
