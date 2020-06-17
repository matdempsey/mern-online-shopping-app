import React from "react";
import { Label } from "reactstrap";

//rename folder, file & function
const Summary = (props) => {
  return (
    <>
      <div>
        <Label size="lg">Price (excl. VAT):</Label>
      </div>
      <div>
        <Label size="lg">Price (incl. VAT):</Label>
      </div>
      <div>
        <Label size="lg">Finance: {""} p/m</Label>
      </div>
    </>
  );
};

export default Summary;
