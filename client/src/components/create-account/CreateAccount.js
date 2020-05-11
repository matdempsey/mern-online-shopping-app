import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };

  const handleEmailChange = (e) => {
    //email validation
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePasswordChange = (e) => {
    //password validation (length, special character, capital etc.)
    setPassword(e.target.value);
    console.log(password);
  };

  const handleConfirmPasswordChange = (e) => {
    // check it matches with password
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  };

  const onSubmit = () => {
    console.log("Submit button clicked");
    //  validate fields
    //  submit to db
    createUserAccount();
    console.log(`${firstName} ${lastName}`);
  };

  const createUserAccount = () => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then(console.log("POST request sucessful"))
      .catch((e) => console.log("error:", e.message));
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
          <Input type="password" onChange={handleConfirmPasswordChange} />
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
