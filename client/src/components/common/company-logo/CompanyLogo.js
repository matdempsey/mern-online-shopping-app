import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import companyLogo from "../../../images/logo/company-logo.png";
import blackCompanyLogo from "../../../images/logo/black-company-logo.png";

import "./CompanyLogo.css";

//ToDo :
// - need to use svg for scaling
const CompanyLogo = () => {
  const history = useHistory();

  const isLoginPage = history.location.pathname === "/login";

  const handleOnClick = () => {
    history.push("/");
  };

  return (
    <div>
      <img
        className={"company-logo"}
        // src={isLoginPage ? blackCompanyLogo : companyLogo}
        alt="eBazaar Company Logo"
        onClick={handleOnClick}
      ></img>
    </div>
  );
};

export default withRouter(CompanyLogo);
