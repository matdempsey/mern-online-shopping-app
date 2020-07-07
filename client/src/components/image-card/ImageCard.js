import React, { useState } from "react";
import { Input, Card, CardTitle, CardImg, CardBody } from "reactstrap";

import placeHolderImage from "../../images/placeholder.png";
import CaseInfo from "../modals/CaseInfo.js";

const ImageCard = (props) => {
  const {
    name,
    price,
    idx,
    imageCardKey,
    onImageCardSelected,
    selectedCaseCostFunc,
  } = props;

  const [showModal, setShowModal] = useState(false);

  // if key matches index then this Image Card's radio button will be checked.
  const checked = imageCardKey === idx;

  console.log(`image card ${idx} is checked?: ${checked}`);

  const handleOnRadioButtonClicked = (key, price) => {
    onImageCardSelected(key);
    selectedCaseCostFunc(price);
  };

  // modal opens initially but after closing, it won't reopen, possibly showModal state needs to change to cause a render
  const handleOnCardImageClicked = () => {
    console.log(showModal);
    setShowModal(true);
  };

  return (
    <div>
      <Card>
        <CardImg
          width=""
          src={placeHolderImage}
          alt={name ? name : "case"`${idx}`}
          onClick={handleOnCardImageClicked}
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <Input
            type="radio"
            checked={checked}
            onChange={() => handleOnRadioButtonClicked(idx, price)}
          />
        </CardBody>
      </Card>
      {showModal ? (
        <CaseInfo
          name={""}
          width={""}
          height={""}
          depth={""}
          formFactor={""}
          colour={""}
          maxGraphicsCardLength={""}
          suitability={""}
          desc={""}
        />
      ) : null}
    </div>
  );
};

export default ImageCard;
