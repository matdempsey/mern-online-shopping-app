import React, { useContext } from "react";
import { withRouter, Redirect, Route } from "react-router-dom";
import { GlobalContext } from "../provider/GlobalProvider";

const PrivateRoute = (props) => {
  const { children, location } = props;

  const { isAuthenticated } = useContext(GlobalContext);

  return (
    <Route
      render={() =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location.pathname } }}
          />
        )
      }
    />
  );
};

export default withRouter(PrivateRoute);
