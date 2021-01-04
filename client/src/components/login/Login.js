import React, { useState } from "react";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";
import CompanyLogo from "../company-logo/CompanyLogo.js";

import "./Login.css";

const Login = (props) => {
  const { history } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const logInDetails = {
    email: email,
    password: password,
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    if (email === "" || password === "") {
      setShowError(true);
      setErrorMessage("Please enter your email address and password.");
    } else {
      // send user log in details to server
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logInDetails),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 401) {
            setShowError(true);
            setErrorMessage("Incorrect details.");
          } else if (res.status === 200) {
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const onCreateAccountClick = () => {
    history.push("/create-account");
  };

  return (
    <div className="flex-login-parent-container">
      <div className="login-company-logo-container">
        <CompanyLogo />
      </div>
      <div className="flex-login-container">
        <div className="login-form">
          <Form>
            <FormGroup>
              <Label size="lg">Log-in</Label>
              <Input
                className="login-input-field"
                type="email"
                onChange={handleEmailChange}
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="login-input-field"
                type="password"
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup>
              <Button
                className="login-btn"
                color="primary"
                onClick={onLoginClick}
              >
                Log in
              </Button>
              <Button className="create-acc-btn" onClick={onCreateAccountClick}>
                Create account
              </Button>
            </FormGroup>
            <FormGroup>
              <Alert color="danger" isOpen={showError}>
                {errorMessage}
              </Alert>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
