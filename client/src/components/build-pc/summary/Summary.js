import React from "react";
import { Label, Button } from "reactstrap";

import "./Summary.css";

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
      <div className="button-pos">
        <Button color="success">Continue</Button>
      </div>
    </>
  );
};

export default Summary;
