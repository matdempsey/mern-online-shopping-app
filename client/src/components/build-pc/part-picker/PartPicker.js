import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import NavBar from "../../common/nav-bar/NavBar.js";

const PartPicker = () => {
  const fetchComponents = () => {
    fetch("/api/components", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <div>
        <Form>
          <FormGroup>
            <FormGroup>
              <Label size="lg">Motherboard</Label>
              <Input className="" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label size="lg">Processor</Label>
              <Input type="select" />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Memory</Label>
              <Input type="select" />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Graphics Card</Label>
              <Input type="select" />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Storage</Label>
              <Input type="select" />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Power Supply</Label>
              <Input type="select" />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Optical Drive</Label>
              <Input type="select" />
            </FormGroup>
            <FormGroup>
              <Label size="lg">Operating System</Label>
              <Input type="select" />
            </FormGroup>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default PartPicker;
