import React from "react";
import { withRouter, Link, Route } from "react-router-dom";
import { Col, Row } from "reactstrap";
import AddToBasketButton from "../buttons/AddToBasketButton";
import StockStatus from "../labels/stock-status/StockStatus.js";

import "./ProductListItems.css";

const ProductListItems = (props) => {
  const { name, description, price, qty } = props;

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
                  qty: qty,
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
            <StockStatus qty={qty} />
          </Row>
          <Row>
            <p className="delivery-para">Free Delivery</p>
          </Row>
          <Row className="product-list-col-3-row-2">
            {qty > 0 && (
              <p className="shipping-para">Shipped within 48 hours</p>
            )}
          </Row>
          <Row className="product-list-col-3-row-3">
            <span className="price-span">£{price}</span>
          </Row>

          {qty > 0 && (
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
