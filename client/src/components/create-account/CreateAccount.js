import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { withRouter } from "react-router-dom";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const userDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = () => {
    let errorMsgArr = [];

    if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === ""
    ) {
      errorMsgArr.push("Please fill in all fields.");
    } else {
      if (firstName.trim() === "") {
        errorMsgArr.push("Please enter your first name.");
      }

      if (lastName.trim() === "") {
        errorMsgArr.push("Please enter your last name.");
      }

      if (email.trim() === "") {
        errorMsgArr.push("Please enter your email address.");
      } else {
        //check if there is at least one . after @
        const charReg = /[@]/;
        if (email.search(charReg) === -1)
          errorMsgArr.push("Invalid email address. Please try again.");
      }

      //password validation block
      if (password.trim() === "") {
        errorMsgArr.push("Please enter your password.");
      } else {
        const capsReg = /[A-Z]/;
        const numReg = /[\d]+/;

        if (password.search(capsReg) === -1) {
          errorMsgArr.push(
            "Password must contain at least one capital letter."
          );
        }

        if (password.search(numReg) === -1) {
          errorMsgArr.push("Password must contain at least one number.");
        }

        if (password.length < 8) {
          errorMsgArr.push("Password must be at least eight characters long.");
        }

        if (password !== confirmPassword) {
          errorMsgArr.push("Passwords don't match. Please try again.");
        }
      }
    }

    if (errorMsgArr.length >= 1) {
      setShowError(true);
      setErrorMessage(errorMsgArr);
    }

    if (errorMsgArr.length === 0) {
      if (showError) {
        setShowError(false);
      }
      createUserAccount();
    }
  };

  const createUserAccount = () => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).catch((e) => console.log("error:", e.message));
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
          <Alert color="danger" isOpen={showError}>
            <ul>
              {errorMessage.map((ele) => (
                <li>{ele}</li>
              ))}
            </ul>
          </Alert>
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
