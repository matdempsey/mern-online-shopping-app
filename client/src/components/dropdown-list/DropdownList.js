import React from "react";
import { Input } from "reactstrap";

const DropdownList = (props) => {
  const { content } = props;

  const components = content.map((component, idx) => (
    <option key={idx}>{component}</option>
  ));

  return (
    <div>
      <Input type="select">{components}</Input>
    </div>
  );
};

export default DropdownList;
