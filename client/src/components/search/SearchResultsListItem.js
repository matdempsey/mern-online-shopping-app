import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";

import "./SearchResultsListItem.css";
import inStockImage from "./../../images/status/in-stock.png";
import outOfStockImage from "./../../images/status/out-of-stock.png";

const SearchResultsListItem = (props) => {
  const { name, price, qty } = props;

  const inStock = qty > 0;

  const handleOnProductClick = () => {
    console.log("clickity click click!!");
    // history.push() here
  };

  return (
    <>
      <Container>
        <Row className="sr-list-item">
          <Col xs="auto">
            <img
              src="https://ipsumimage.appspot.com/220x200"
              className="product-img"
              alt={name}
              onClick={handleOnProductClick}
            ></img>
          </Col>
          <Col xs="auto">
            <Row>
              <Link
                to="/404"
                className="sr-product-name-link"
                onClick={handleOnProductClick}
              >
                {name}
              </Link>
            </Row>
            <Row>
              <br></br>
            </Row>
            <Row>
              <p>
                {inStock ? (
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "small",
                      color: "#339933",
                    }}
                  >
                    <img src={inStockImage}></img>
                    &nbsp;in stock
                  </span>
                ) : (
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "small",
                      color: "#BD2F2F",
                    }}
                  >
                    <img src={outOfStockImage}></img>
                    &nbsp;out of stock
                  </span>
                )}
              </p>
            </Row>
          </Col>
          <Col xs="auto">
            <Row>
              <p className="sr-product-price">£{price}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchResultsListItem;
