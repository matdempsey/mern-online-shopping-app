import React from "react";
import { Button } from "reactstrap";

import "./AddToBasketButton.css";

const handleOnClick = () => {};

const AddToBasketButton = () => {
  return (
    <div>
      <Button
        className="add-to-basket-btn"
        color="success"
        onClick={handleOnClick}
      >
        Add to Basket
      </Button>
    </div>
  );
};

export default AddToBasketButton;
