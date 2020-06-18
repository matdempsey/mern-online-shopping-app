import React, { useState } from "react";
import { Modal, ModalHeader, Button } from "reactstrap";

const FurtherInfo = () => {
  const [modal, setModal] = useState(false);

  console.log("inside modal");

  const toggle = () => {
    setModal(true);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Test</ModalHeader>
      </Modal>
    </div>
  );
};

export default FurtherInfo;
