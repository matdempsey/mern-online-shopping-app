import React, { useState, useEffect } from "react";

import ImageCardDeck from "../../image-card/ImageCardDeck.js";

const CasePicker = (props) => {
  const { totalCostFunc } = props;

  const [casesArr, setCasesArr] = useState([]);

  useEffect(() => {
    fetch("/api/cases", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCasesArr(res);
      });
  }, []);

  return (
    <div>
      <ImageCardDeck cases={casesArr} totalCostFunc={totalCostFunc} />
    </div>
  );
};

export default CasePicker;
