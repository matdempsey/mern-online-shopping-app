import React from "react";
import CustomerReview from "./CustomerReview";

import "./CustomerReviewsList.css";

const CustomerReviewsList = (props) => {
  const { reviews } = props;

  return (
    <div className="customer-reviews-list-container">
      {reviews.map((review) => (
        <CustomerReview
          key={review._id}
          customerName={review.customerName}
          title={review.title}
          text={review.text}
          rating={review.rating}
          datePosted={review.datePosted}
        />
      ))}
    </div>
  );
};

export default CustomerReviewsList;
