import React, { useState } from "react";
import { CardDeck } from "reactstrap";

import ImageCard from "./ImageCard.js";

const ImageCardDeck = (props) => {
  const { cases, totalCostFunc } = props;

  const [imageCardKey, setImageCardKey] = useState(-1);

  const handleOnImageCardSelected = (key) => {
    setImageCardKey(key);
  };

  return (
    <div>
      <CardDeck>
        {cases.map((ele, idx) => (
          <ImageCard
            key={idx}
            idx={idx}
            name={ele.name}
            price={ele.price}
            imageCardKey={imageCardKey}
            totalCostFunc={totalCostFunc}
            onImageCardSelected={handleOnImageCardSelected}
          />
        ))}
      </CardDeck>
    </div>
  );
};

export default ImageCardDeck;
