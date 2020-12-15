import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import CompanyLogo from "../company-logo/CompanyLogo.js";
import { Link } from "react-router-dom";

import "./CreateAccount.css";

const CreateAccount = (props) => {
  const { history } = props;

  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  let errorMsgArr = [];

  const handleFirstNameChange = (e) => {
    setCustomer({ ...customer, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setCustomer({ ...customer, lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setCustomer({ ...customer, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setCustomer({ ...customer, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = () => {
    if (
      customer.firstName === "" &&
      customer.lastName === "" &&
      customer.email === "" &&
      customer.password === ""
    ) {
      errorMsgArr.push("Please fill in all fields.");
    } else {
      if (customer.firstName.trim() === "") {
        errorMsgArr.push("Please enter your first name.");
      }

      if (customer.lastName.trim() === "") {
        errorMsgArr.push("Please enter your last name.");
      }

      if (customer.email.trim() === "") {
        errorMsgArr.push("Please enter your email address.");
      } else {
        //check if there is at least one . after @
        const charReg = /[@]/;
        if (customer.email.search(charReg) === -1)
          errorMsgArr.push("Invalid email address.");
      }

      //password validation block
      if (customer.password.trim() === "") {
        errorMsgArr.push("Please enter your password.");
      } else {
        const capsReg = /[A-Z]/;
        const numReg = /[\d]+/;

        if (customer.password.search(capsReg) === -1) {
          errorMsgArr.push(
            "Password must contain at least one capital letter."
          );
        }

        if (customer.password.search(numReg) === -1) {
          errorMsgArr.push("Password must contain at least one number.");
        }

        if (customer.password.length < 8) {
          errorMsgArr.push("Password must be at least eight characters long.");
        }

        if (customer.password !== confirmPassword) {
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

  const createUserAccount = () => {
    fetch("/api/customer-accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) history.push("/login");

        if (res.status === 409) {
          errorMsgArr.push(
            "An account with this email address already exists."
          );
          setErrorMessage(errorMsgArr);
          setShowError(true);
        }
      })
      .catch((err) => console.log(err));
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
              <Label className="ca-title">Create Account</Label>
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
                    <li
                      className={
                        errorMessage.length > 1 ? "error-li" : "error-li-no-ls"
                      }
                      key={ele}
                    >
                      {ele}
                    </li>
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
