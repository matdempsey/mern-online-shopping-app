import React from "react";
import {
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  ModalFooter,
  Label,
  Container,
  Row,
  Col,
} from "reactstrap";

import "./CaseInfoModal.css";

const CaseInfoModal = (props) => {
  const { caseObj, imageClickedFunc } = props;
  const { name } = caseObj;

  console.log("caseObj =", caseObj);

  //todo: filter out id, qty, price from caseObj

  const table = Object.entries(caseObj)
    .filter(
      (ele) =>
        ele[0] !== "_id" &&
        ele[0] !== "name" &&
        ele[0] !== "qty" &&
        ele[0] !== "price"
    )
    .map((ele, idx) => {
      return (
        <div key={idx}>
          <Container>
            <Row>
              <Col className="key-col">
                <Label>{ele[0]}</Label>
              </Col>
              <Col>
                <Label>{ele[1]}</Label>
              </Col>
            </Row>
          </Container>
        </div>
      );
    });

  const closeModal = () => {
    imageClickedFunc(false);
  };

  return (
    <div>
      <Modal size="lg" isOpen={true} centered={true} scrollable={true}>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>{table}</ModalBody>
        <ModalFooter>
          <Button color="success" onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CaseInfoModal;
