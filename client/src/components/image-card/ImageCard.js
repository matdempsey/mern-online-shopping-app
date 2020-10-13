import React, { useState } from "react";
import { Input, Card, CardTitle, CardImg, CardBody } from "reactstrap";

import placeHolderImage from "../../images/placeholder.png";
import CaseInfoModal from "../modals/CaseInfoModal.js";

import "./ImageCard.css";

const ImageCard = (props) => {
  const {
    idx,
    caseObj,
    imageCardKey,
    onImageCardSelected,
    selectedCaseCostFunc,
  } = props;

  const { name, price } = caseObj;

  const [imageClicked, setImageClicked] = useState(false);

  // if key matches index then this Image Card's radio button will be checked.
  const checked = imageCardKey === idx;

  console.log(`image card ${idx} is checked?: ${checked}`);

  const handleOnRadioButtonClicked = (key, price) => {
    onImageCardSelected(key);
    selectedCaseCostFunc(price);
  };

  const handleOnCardImageClicked = (bool = true) => {
    setImageClicked(bool);
  };

  return (
    <div>
      <Card>
        <CardImg
          className="image-card"
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
      {imageClicked ? (
        <CaseInfoModal
          caseObj={caseObj}
          cardImageClicked={handleOnCardImageClicked}
        />
      ) : null}
    </div>
  );
};

export default ImageCard;
