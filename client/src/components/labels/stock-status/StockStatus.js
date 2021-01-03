import React from "react";

import "./StockStatus.css";

const StockStatus = (props) => {
  const { qty } = props;

  return (
    <div>
      {qty > 0 ? (
        <span className="in-stock-status-text">in stock</span>
      ) : (
        <span className="out-of-stock-status-text">out of stock</span>
      )}
    </div>
  );
};

export default StockStatus;
