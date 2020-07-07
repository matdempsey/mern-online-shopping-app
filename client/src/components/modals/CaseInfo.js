import React, { useState } from "react";
import { Modal, ModalHeader, Button, ModalBody, ModalFooter } from "reactstrap";

const CaseInfo = (props) => {
  const {
    name,
    width,
    height,
    depth,
    formFactor,
    colour,
    maxGraphicsCardLength,
    suitability,
    desc,
  } = props;
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    console.log("ssadads");
    setModal(!modal);
  };

  return (
    <div>
      <Modal size="lg" isOpen={modal} centered={true}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
          orci turpis. Pellentesque eros velit, suscipit a interdum a, bibendum
          nec nunc. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Nam mollis, nibh vel pellentesque
          scelerisque, erat est varius lectus, eget venenatis nulla diam a leo.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum eu turpis lacus. Suspendisse
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CaseInfo;
