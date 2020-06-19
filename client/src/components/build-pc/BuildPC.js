import React from "react";
import { Label, Button } from "reactstrap";

import CasePicker from "./case-picker/CasePicker.js";
import ComponentPicker from "./component-picker/ComponentPicker.js";
import Summary from "./summary/Summary.js";

import "./BuildPC.css";

const BuildPC = () => {
  return (
    <>
      <Label className="section-banner" size="lg">
        1) SELECT A CASE
      </Label>
      <CasePicker />
      <Label className="section-banner" size="lg">
        2) CHOOSE YOUR CORE COMPONENTS
      </Label>
      <ComponentPicker />
      <Label className="section-banner" size="lg">
        3) REVIEW COST
      </Label>
      <Summary totalCost={""} perMonthCost={""} />
      <div className="button-pos">
        <Button color="success">Continue</Button>
      </div>
    </>
  );
};

export default BuildPC;
