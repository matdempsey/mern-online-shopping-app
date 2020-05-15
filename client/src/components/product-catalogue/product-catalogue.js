import React from "react";
import {
  Container,
  Row,
  Col,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import SearchBar from "../common/search-bar/SearchBar.js";

const ProductCatalogue = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <SearchBar />
          </Row>

          <Row>
            <ListGroup>
              <ListGroupItem></ListGroupItem>
              <ListGroupItem></ListGroupItem>
              <ListGroupItem></ListGroupItem>
            </ListGroup>
          </Row>
        </Container>
      </div>
      ;
    </>
  );
};

export default ProductCatalogue;
