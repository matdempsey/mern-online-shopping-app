import React, { useState } from "react";
import { Input, Card, CardTitle, CardImg, CardBody } from "reactstrap";

import placeHolderImage from "../../images/placeholder.png";

//ToDo:
// - if en radio button checked then clicked again, uncheck and visa versa
// - uncheck other image cards (currently can check all)

const ImageCard = (props) => {
  const { name, price, idx, totalCostFunc } = props;
  const [checked, setChecked] = useState(false);

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
            onClick={() => {
              totalCostFunc(price);
            }}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCard;
