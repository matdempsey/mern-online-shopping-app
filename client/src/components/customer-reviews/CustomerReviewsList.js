import React from "react";
import CustomerReview from "./CustomerReview";

import "./CustomerReviewsList.css";

const CustomerReviewsList = (props) => {
  const { reviews, productID } = props;

  return (
    <div className="customer-reviews-list-container">
      {reviews.map((review) => (
        <CustomerReview
          productID={productID}
          key={review._id}
          reviewID={review._id}
          customerName={review.customerName}
          title={review.title}
          text={review.text}
          rating={review.rating}
          datePosted={review.datePosted}
          helpfulCount={review.helpfulCount}
        />
      ))}
    </div>
  );
};

export default CustomerReviewsList;
