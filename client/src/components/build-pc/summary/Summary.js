import React from "react";
import { Label } from "reactstrap";

//rename folder, file & function
const Summary = (props) => {
  const { totalCost } = props;

  const perMonthCost = (totalCost / 100) * 11.5;

  return (
    <>
      <div>
        <Label size="lg">
          Price (incl. VAT): £{totalCost ? totalCost : "0.00"}
        </Label>
      </div>
      <div>
        <Label size="lg">
          Finance: £{perMonthCost ? perMonthCost : "0.00"} p/m
        </Label>
      </div>
    </>
  );
};

export default Summary;
