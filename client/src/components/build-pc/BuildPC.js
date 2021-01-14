import React, { useState } from "react";
import { Label, Button } from "reactstrap";
import CasePicker from "./case-picker/CasePicker.js";
import ComponentPicker from "./component-picker/ComponentPicker.js";
import Summary from "./summary/Summary.js";
import Footer from "../footer/Footer.js";

import "./BuildPC.css";
import NavBar from "../nav-bar/NavBar.js";
import Header from "../header-bar/Header.js";

const BuildPC = () => {
  const [caseCost, setCaseCost] = useState(0);
  const [componentCost, setComponentCost] = useState(0);

  const handleSelectedCaseCost = (cost) => {
    setCaseCost(cost);
  };

  const handleSelectedComponentCost = (cost) => {
    const sum = componentCost + cost;
    setComponentCost(sum);
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex-build-pc-parent-container">
        <div className="build-pc-container">
          <Label className="section-banner" size="lg">
            1) SELECT A CASE
          </Label>

          <CasePicker selectedCaseCostFunc={handleSelectedCaseCost} />

          <Label className="section-banner" size="lg">
            2) CHOOSE YOUR CORE COMPONENTS
          </Label>

          <div className="section-padding">
            <ComponentPicker
              selectedComponentCostFunc={handleSelectedComponentCost}
            />
          </div>

          <Label className="section-banner" size="lg">
            3) REVIEW COST
          </Label>

          <div className="section-padding">
            <Summary caseCost={caseCost} componentCost={componentCost} />
          </div>
          <div className="button-pos">
            <Button color="success">Continue</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuildPC;
