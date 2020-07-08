import React, { useState } from "react";
import { Input, Card, CardTitle, CardImg, CardBody } from "reactstrap";

import placeHolderImage from "../../images/placeholder.png";
import CaseInfoModal from "../modals/CaseInfoModal.js";

const ImageCard = (props) => {
  const {
    name,
    price,
    idx,
    imageCardKey,
    onImageCardSelected,
    selectedCaseCostFunc,
  } = props;

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
          name={""}
          width={""}
          height={""}
          depth={""}
          formFactor={""}
          colour={""}
          maxGraphicsCardLength={""}
          suitability={""}
          desc={""}
          imageClicked={handleOnCardImageClicked}
        />
      ) : null}
    </div>
  );
};

export default ImageCard;
