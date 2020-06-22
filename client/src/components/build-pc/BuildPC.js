import React, { useState } from "react";
import { Label, Button } from "reactstrap";

import CasePicker from "./case-picker/CasePicker.js";
import ComponentPicker from "./component-picker/ComponentPicker.js";
import Summary from "./summary/Summary.js";

import "./BuildPC.css";

const BuildPC = () => {
  const [totalCost, setTotalCost] = useState(0);

  const handleTotalCostChange = (value) => {
    const sum = totalCost + value;
    setTotalCost(sum);
  };

  return (
    <>
      <Label className="section-banner" size="lg">
        1) SELECT A CASE
      </Label>
      <CasePicker totalCostFunc={handleTotalCostChange} />
      <Label className="section-banner" size="lg">
        2) CHOOSE YOUR CORE COMPONENTS
      </Label>
      <ComponentPicker totalCostFunc={handleTotalCostChange} />
      <Label className="section-banner" size="lg">
        3) REVIEW COST
      </Label>
      <Summary totalCost={totalCost} />
      <div className="button-pos">
        <Button color="success">Continue</Button>
      </div>
    </>
  );
};

export default BuildPC;
