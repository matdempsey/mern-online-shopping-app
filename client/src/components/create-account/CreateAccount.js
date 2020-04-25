import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };

  const handleEmailChange = (e) => {
    // setter
  };
  const handlePasswordChange = (e) => {
    // setter
  };

  const handleConfirmPasswordChange = (e) => {
    // setter
  };

  const onSubmit = () => {
    console.log("Submit button clicked");
    //  validate fields
    //  submit to db
    console.log(`${firstName} ${lastName}`);
  };

  const user = {
    fname: firstName,
    lname: lastName,
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" onChange={handleFirstNameChange} />
          <Label>Last Name</Label>
          <Input type="text" onChange={handleLastNameChange} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" onChange={handleEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" onChange={handlePasswordChange} />
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input type="password" onChange={handlePasswordChange} />
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
