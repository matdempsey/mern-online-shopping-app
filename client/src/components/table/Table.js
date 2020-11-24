import React from "react";
import { Container, Label, Row, Col } from "reactstrap";

import "./Table.css";

const Table = (props) => {
  const { caseObj } = props;
  const {
    width,
    depth,
    height,
    formFactor,
    maxGraphicsCardLength,
    description,
    suitability,
    price,
  } = caseObj;

  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col className="key-col">
              <Label>W x D x H</Label>
            </Col>
            <Col>
              <Label>{`${width} x ${depth} x ${height}`}</Label>
            </Col>
          </Row>
          <Row>
            <Col className="key-col">
              <Label>Form Factor</Label>
            </Col>
            <Col>
              <Label>{formFactor}</Label>
            </Col>
          </Row>
          <Row>
            <Col className="key-col">
              <Label>Max Graphics Card Length</Label>
            </Col>
            <Col>
              <Label>{maxGraphicsCardLength}</Label>
            </Col>
          </Row>
          <Row>
            <Col className="key-col">
              <Label>Description</Label>
            </Col>
            <Col>
              <Label>{description}</Label>
            </Col>
          </Row>
          <Row>
            <Col className="key-col">
              <Label>Suitability</Label>
            </Col>
            <Col>
              <Label>{suitability}</Label>
            </Col>
          </Row>
          <Row>
            <Col className="key-col">
              <Label>Price</Label>
            </Col>
            <Col>
              <Label>£{price}</Label>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Table;
