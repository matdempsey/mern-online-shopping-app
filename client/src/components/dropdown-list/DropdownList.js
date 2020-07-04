import React, { useState } from "react";
import { Input } from "reactstrap";

const DropdownList = (props) => {
  const { items, selectedComponentCostFunc } = props;

  const [prevItemCost, setPrevItemCost] = useState(0.0);

  const handleOnItemClick = (e) => {
    // filter array so that it returns an array that only contains component user selected in dropdown list
    const filteredArr = items.filter(
      (component) => component.name === e.target.value
    );

    // get price of component and pass to function that was passed via props
    const x = filteredArr.map((component) => component.price);
    const selectedItemCost = x[0];

    // works but could refactor to tidy it up
    if (selectedItemCost >= prevItemCost) {
      let costSurplus = selectedItemCost - prevItemCost;
      setPrevItemCost(selectedItemCost);
      selectedComponentCostFunc(costSurplus);
    } else {
      let costDeficit = selectedItemCost - prevItemCost;
      setPrevItemCost(selectedItemCost);
      selectedComponentCostFunc(costDeficit);
    }
  };

  return (
    <div>
      <Input onChange={(e) => handleOnItemClick(e)} type="select">
        <option hidden></option>
        {items.map((component, idx) => (
          <option key={idx}>{component.name}</option>
        ))}
      </Input>
    </div>
  );
};

export default DropdownList;
