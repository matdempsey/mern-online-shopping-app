import React from "react";
import { Input } from "reactstrap";

const DropdownList = (props) => {
  const { items, totalCostFunc } = props;

  const components = items.map((component, idx) => (
    <option key={idx}>{component.name}</option>
  ));

  const handleOnItemClick = (e) => {
    // filter array so that it returns an array that only contains component user selected in dropdown list
    const filteredArr = items.filter((component) =>
      component.name.includes(e.target.value)
    );

    // get price of component and pass to function that was passed via props
    const x = filteredArr.map((component) => component.price);
    totalCostFunc(...x);
  };

  return (
    <div>
      <Input onChange={(e) => handleOnItemClick(e)} type="select">
        {components}
      </Input>
    </div>
  );
};

export default DropdownList;
