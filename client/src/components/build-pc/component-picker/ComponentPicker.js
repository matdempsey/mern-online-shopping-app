import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label } from "reactstrap";

import DropdownList from "../../dropdown-list/DropdownList.js";

const ComponentPicker = (props) => {
  const { selectedComponentCostFunc } = props;

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

  // logic correct, but types not in the order i.e. Mobo, processor, ram, graphics card, power supply, storage, OS
  const findDistinctComponentTypes = () => {
    let arr = [];

    componentList.map((component, idx) => {
      if (idx === 0) {
        // required for initial comparison
        arr.push(component.type);
      } else if (!arr.includes(component.type)) {
        arr.push(component.type);
      }
    });
    return arr;
  };

  const distinctTypesArr = findDistinctComponentTypes();

  const filterComponents = (componentType) => {
    return componentList
      .filter((component) => component.type === componentType)
      .map((component) => {
        return { name: component.name, price: component.price };
      });
  };

  return (
    <>
      {distinctTypesArr.map((name, idx) => {
        return (
          <div>
            <Form>
              <FormGroup>
                <Label size="lg">{name}</Label>
                <DropdownList
                  items={filterComponents(name)}
                  selectedComponentCostFunc={selectedComponentCostFunc}
                />
              </FormGroup>
            </Form>
          </div>
        );
      })}
    </>
  );
};

export default ComponentPicker;
