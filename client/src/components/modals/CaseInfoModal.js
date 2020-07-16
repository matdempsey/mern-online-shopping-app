import React from "react";
import { Modal, ModalHeader, Button, ModalBody, ModalFooter } from "reactstrap";

import Table from "../table/Table.js";

const CaseInfoModal = (props) => {
  const { caseObj, cardImageClicked } = props;
  const { name } = caseObj;

  console.log("caseObj =", caseObj);

  const closeModal = () => {
    cardImageClicked(false);
  };

  return (
    <div>
      <Modal size="lg" isOpen={true} centered={true} scrollable={true}>
        <ModalHeader className="header">{name}</ModalHeader>
        <ModalBody>
          <Table caseObj={caseObj} />
        </ModalBody>
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
