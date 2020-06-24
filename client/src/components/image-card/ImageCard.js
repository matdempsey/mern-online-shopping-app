import React from "react";
import { Input, Card, CardTitle, CardImg, CardBody } from "reactstrap";

import placeHolderImage from "../../images/placeholder.png";

const ImageCard = (props) => {
  const {
    name,
    price,
    idx,
    imageCardKey,
    totalCostFunc,
    onImageCardSelected,
  } = props;

  // if key matches index then this Image Card's radio button will be checked.
  const checked = imageCardKey === idx;

  console.log(`image card ${idx} is checked?: ${checked}`);

  const handleOnRadioButtonClicked = (key, price) => {
    totalCostFunc(price);
    onImageCardSelected(key);
  };

  return (
    <div>
      <Card>
        <CardImg
          width=""
          src={placeHolderImage}
          alt={name ? name : "case"`${idx}`}
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
    </div>
  );
};

export default ImageCard;
