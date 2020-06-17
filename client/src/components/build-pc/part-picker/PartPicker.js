import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label } from "reactstrap";

import DropdownList from "../../dropdown-list/DropdownList.js";

const PartPicker = () => {
  const [componentList, setComponentList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

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
        setLoadingData(false);
      });
  }, []);

  const filterComponents = (componentType) => {
    return componentList
      .filter((component) => component.type === componentType)
      .map((component) => component.name);
  };

  return (
    !loadingData && (
      <>
        <div>
          <Form>
            <FormGroup>
              <Label size="lg">Motherboard</Label>
              <DropdownList content={filterComponents("Motherboard")} />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Processor</Label>
              <DropdownList content={filterComponents("Processor")} />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Memory</Label>
              <DropdownList content={filterComponents("Memory")} />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Graphics Card</Label>
              <DropdownList content={filterComponents("Graphics Card")} />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Storage</Label>
              <DropdownList content={filterComponents("Storage")} />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Power Supply</Label>
              <DropdownList content={filterComponents("Power Supply")} />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Operating System</Label>
              <DropdownList content={filterComponents("Operating System")} />
            </FormGroup>
          </Form>
        </div>
      </>
    )
  );
};

export default PartPicker;
