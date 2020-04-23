import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const { history } = props;
  const onLoginClick = () => {
    console.log("Login button clicked");
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
          <Input type="email" placeholder="Email Address" />
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
          <Input type="password" placeholder="Password" />
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
