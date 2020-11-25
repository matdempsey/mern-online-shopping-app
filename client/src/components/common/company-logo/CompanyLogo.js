import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import "./CompanyLogo.css";

const CompanyLogo = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/");
  };

  return (
    <div>
      <span className="company-logo" onClick={handleOnClick}>
        <span className="e">e</span>Bazaar
      </span>
    </div>
  );
};

export default withRouter(CompanyLogo);
