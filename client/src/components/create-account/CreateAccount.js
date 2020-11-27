import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import CompanyLogo from "../common/company-logo/CompanyLogo.js";
import { Link } from "react-router-dom";

import "./CreateAccount.css";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  let errorMsgArr = [];

  const customerDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
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
          errorMsgArr.push("Invalid email address.");
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
      setErrorMessage(errorMsgArr);
      setShowError(true);
    }

    if (errorMsgArr.length === 0) {
      if (showError) {
        setShowError(false);
      }
      createUserAccount();
    }
  };

  // need to check response -- still unfinised server side
  const createUserAccount = () => {
    fetch("/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerDetails),
    })
      .then((res) => res.json())
      .then(() => {
        setErrorMessage(
          errorMsgArr.push("An account with this email address already exists.")
        );
      })
      .catch((e) => console.log("error:", e.message));
  };

  return (
    <div className="flex-ca-parent-container">
      <div className="ca-company-logo-container">
        <CompanyLogo />
      </div>
      <div className="flex-ca-container">
        <div className="ca-form">
          <Form>
            <FormGroup>
              <Label className="ca-title" size="lg">
                Create account
              </Label>
              <Label>First Name</Label>
              <Input type="text" onChange={handleFirstNameChange} />
              <Label>Last Name</Label>
              <Input type="text" onChange={handleLastNameChange} />
              <Label>Email</Label>
              <Input type="email" onChange={handleEmailChange} />
              <Label>Password</Label>
              <Input type="password" onChange={handlePasswordChange} />
              <Label>Confirm Password</Label>
              <Input type="password" onChange={handleConfirmPasswordChange} />
            </FormGroup>

            <FormGroup>
              <Button color="primary" onClick={onSubmit}>
                Submit
              </Button>
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
              <span>Already created an account?</span>
              <Link to={"/login"}>&nbsp;Log-in</Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
