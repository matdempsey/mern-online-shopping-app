import React, { useState, useEffect } from "react";

import ImageCardDeck from "../../image-card/ImageCardDeck.js";

const CasePicker = (props) => {
  const { selectedCaseCostFunc } = props;

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
      <ImageCardDeck
        selectedCaseCostFunc={selectedCaseCostFunc}
        cases={casesArr}
      />
    </div>
  );
};

export default CasePicker;
