import React from "react";
import { Label } from "reactstrap";

import CasePicker from "./case-picker/CasePicker.js";
import PartPicker from "./part-picker/PartPicker.js";

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
      <PartPicker />
    </>
  );
};

export default BuildPC;
