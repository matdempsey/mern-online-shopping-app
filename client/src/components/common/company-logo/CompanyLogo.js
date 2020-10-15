import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import companyLogo from "../../../images/logo/company-logo.png";
import blackCompanyLogo from "../../../images/logo/black-company-logo.png";

import "./CompanyLogo.css";

//ToDo :
// - need to use svg for scaling
const CompanyLogo = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      <img
        className={"company-logo"}
        // src={isLoginPage ? blackCompanyLogo : companyLogo}
        alt="eBazaar Company Logo"
      ></img>
    </div>
  );
};

export default withRouter(CompanyLogo);
