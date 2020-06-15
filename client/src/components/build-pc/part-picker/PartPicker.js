import React, { useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const PartPicker = () => {
  useEffect(() => {
    fetch("/api/components", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const components = res;
        console.log("partpicker components", components);
      });
  }, []);

  return (
    <>
      <div>
        <Form>
          <FormGroup>
            <FormGroup>
              <Label size="lg">Motherboard</Label>
              <Input className="" type="select">
                <option>1</option>
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
