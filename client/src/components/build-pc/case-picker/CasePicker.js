import React, { useState, useEffect } from "react";
import ImageCardDeck from "../../image-card/ImageCardDeck.js";

import "./CasePicker.css";

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
    <div className="case-picker-container">
      <ImageCardDeck
        selectedCaseCostFunc={selectedCaseCostFunc}
        cases={casesArr}
      />
    </div>
  );
};

export default CasePicker;
