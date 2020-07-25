import React from "react";
import { Col, Row } from "reactstrap";

import "./SearchResultsListItem.css";
import inStockImage from "./../../images/in-stock.png";
import outOfStockImage from "./../../images/out-of-stock.png";

const SearchResultsListItem = (props) => {
  const { name, price, qty } = props;

  const inStock = qty > 0;

  return (
    <div>
      <Row id="list-item">
        <Col>
          <img id="alt-text" alt={name}></img>
        </Col>
        <Col>
          <Row>
            <p id="product-name">{name}</p>
          </Row>
          <Row>
            <p>
              {inStock ? (
                <span style={{ color: "green" }}>
                  <img src={inStockImage}></img>
                  &nbsp;in stock
                </span>
              ) : (
                <span style={{ color: "red" }}>
                  <img src={outOfStockImage}></img>
                  &nbsp;out of stock
                </span>
              )}
            </p>
          </Row>
        </Col>
        <Col>
          <p>£{price}</p>
        </Col>
      </Row>
    </div>
  );
};

export default SearchResultsListItem;
