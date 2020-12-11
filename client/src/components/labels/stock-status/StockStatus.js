import React from "react";
import inStockImage from "../../../images/stock-status/in-stock.png";
import outOfStockImage from "../../../images/stock-status/out-of-stock.png";

import "./StockStatus.css";

const StockStatus = (props) => {
  const { qty } = props;

  return (
    <div>
      {qty > 0 ? (
        <span>
          <img className="stock-status-img" src={inStockImage}></img>
          <span className="in-stock-status-text">in stock</span>
        </span>
      ) : (
        <span>
          <img className="stock-status-img" src={outOfStockImage}></img>
          <span className="out-of-stock-status-text">out of stock</span>
        </span>
      )}
    </div>
  );
};

export default StockStatus;
