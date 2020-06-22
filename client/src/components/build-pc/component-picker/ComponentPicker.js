import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label } from "reactstrap";

import DropdownList from "../../dropdown-list/DropdownList.js";

const ComponentPicker = (props) => {
  const { totalCostFunc } = props;

  const [componentList, setComponentList] = useState([]);

  useEffect(() => {
    fetch("/api/components", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setComponentList(res);
      });
  }, []);

  const filterComponents = (componentType) => {
    return componentList
      .filter((component) => component.type === componentType)
      .map((component) => {
        return { name: component.name, price: component.price };
      });
  };

  return (
    <>
      <div>
        <Form>
          <FormGroup>
            <Label size="lg">Motherboard</Label>
            <DropdownList
              items={filterComponents("Motherboard")}
              totalCostFunc={totalCostFunc}
            />
          </FormGroup>
          <FormGroup>
            <Label size="lg">Processor</Label>
            <DropdownList items={filterComponents("Processor")} />
          </FormGroup>
          <FormGroup>
            <Label size="lg">Memory</Label>
            <DropdownList
              items={filterComponents("Memory")}
              totalCostFunc={totalCostFunc}
            />
          </FormGroup>
          <FormGroup>
            <Label size="lg">Graphics Card</Label>
            <DropdownList
              items={filterComponents("Graphics Card")}
              totalCostFunc={totalCostFunc}
            />
          </FormGroup>
          <FormGroup>
            <Label size="lg">Storage</Label>
            <DropdownList
              items={filterComponents("Storage")}
              totalCostFunc={totalCostFunc}
            />
          </FormGroup>
          <FormGroup>
            <Label size="lg">Power Supply</Label>
            <DropdownList
              items={filterComponents("Power Supply")}
              totalCostFunc={totalCostFunc}
            />
          </FormGroup>
          <FormGroup>
            <Label size="lg">Operating System</Label>
            <DropdownList
              items={filterComponents("Operating System")}
              totalCostFunc={totalCostFunc}
            />
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default ComponentPicker;
