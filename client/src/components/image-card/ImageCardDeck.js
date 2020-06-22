import React from "react";
import { CardDeck } from "reactstrap";

import ImageCard from "./ImageCard.js";

const ImageCardDeck = (props) => {
  const { cases, totalCostFunc } = props;

  return (
    <div>
      <CardDeck>
        {cases.map((ele, idx) => (
          <ImageCard
            key={idx}
            idx={idx}
            name={ele.name}
            totalCostFunc={totalCostFunc}
            price={ele.price}
          />
        ))}
      </CardDeck>
    </div>
  );
};

export default ImageCardDeck;
