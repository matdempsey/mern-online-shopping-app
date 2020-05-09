import React, { useState } from "react";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const { history } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    if (email === "" || password === "") {
      // set state to true for error component
      setShowError(true);
      setErrorMessage("Please enter your email address and password.");
    }

    fetch("");
  };

  const onCreateAccountClick = () => {
    console.log(props);
    history.push("/create-account");
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            onChange={handleEmailChange}
            placeholder="Email Address"
          />
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
          <Input
            type="password"
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Alert color="danger" isOpen={showError}>
            {errorMessage}
          </Alert>
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={onLoginClick}>
            Log in
          </Button>
          <Button color="success" onClick={onCreateAccountClick}>
            Create account
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default withRouter(Login);
