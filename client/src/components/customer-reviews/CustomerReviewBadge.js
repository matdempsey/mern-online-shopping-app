import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../../provider/GlobalProvider.js";
import { Badge } from "reactstrap";

import "./CustomerReviewBadge.css";

const CustomerReviewBadge = (props) => {
  const { history, productID, reviewID, helpfulCount } = props;

  const { isAuthenticated } = useContext(GlobalContext);

  const updateCount = (data) => {
    fetch(`/api/products/${productID}/reviews/${reviewID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const onBadgeClick = (id) => {
    if (isAuthenticated) {
      if (id === 1) {
        updateCount({ helpfulCount: { yes: helpfulCount.yes + 1 } });
      } else {
        updateCount({ helpfulCount: { no: helpfulCount.no + 1 } });
      }
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="customer-review-badge-container">
      <span className="small-text">Did you find this review helpful?</span>
      <Badge className="review-badge" onClick={() => onBadgeClick(1)}>
        Yes ({helpfulCount.yes})
      </Badge>
      <Badge className="review-badge" onClick={() => onBadgeClick(2)}>
        No ({helpfulCount.no})
      </Badge>
    </div>
  );
};

export default withRouter(CustomerReviewBadge);
