import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

const CreateAccount = () => {
  const onSubmit = () => {
    console.log("Submit button clicked");
    //  validate fields
    //  submit to db
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" />
          <Label>Surname</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" />
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input type="password" />
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={onSubmit}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default withRouter(CreateAccount);
