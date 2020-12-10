import React from "react";
import { withRouter, Link, Route } from "react-router-dom";
import { Col, Row } from "reactstrap";
import AddToBasketButton from "../buttons/AddToBasketButton";

import inStockImage from "./../../images/status/in-stock.png";
import outOfStockImage from "./../../images/status/out-of-stock.png";

import "./ProductListItems.css";

const ProductListItems = (props) => {
  const { name, description, price, qty } = props;

  const inStock = qty > 0;

  return (
    <div>
      {/* main col 1 */}
      <Row className="product-list-row-item">
        <Col className="product-list-col-1">
          <img
            className="product-list-image"
            src="https://ipsumimage.appspot.com/220x200"
            alt={name}
          ></img>
        </Col>

        {/* main col 2 */}
        <Col className="product-list-col-2">
          <Row className="product-list-col-2-row-1">
            <Link
              className="product-item-link"
              to={{
                pathname: `/products/${name}`,
                state: {
                  img: "insert path here",
                  name: name,
                  description: description,
                  price: price,
                  inStock: inStock,
                },
              }}
            >
              {name}
            </Link>
          </Row>
        </Col>

        {/* main col 3 */}
        <Col className="product-list-col-3">
          <Row className="product-list-col-3-row-1">
            {inStock ? (
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
          </Row>
          <Row>
            <p className="delivery-para">Free Delivery</p>
          </Row>
          <Row className="product-list-col-3-row-2">
            {inStock && (
              <p className="shipping-para">Shipped within 48 hours</p>
            )}
          </Row>
          <Row className="product-list-col-3-row-3">
            <span className="currency-span">£</span>
            <span className="price-span">{price}</span>
          </Row>

          {inStock && (
            <Row className="product-list-col-3-row-4">
              <AddToBasketButton />
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(ProductListItems);
