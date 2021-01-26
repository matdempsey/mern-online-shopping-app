import React from "react";
import StarRating from "../labels/star-rating/StarRating";

import "./CustomerReview.css";
import CustomerReviewBadge from "./CustomerReviewBadge";

const CustomerReview = (props) => {
  const { customerName, title, text, rating, datePosted } = props;
  return (
    <div className="customer-review-container">
      <div className="review-date-container">
        <label className="review-date">{datePosted}</label>
      </div>

      <div className="review-section-1">
        <span className="review-username">By {customerName}</span>
      </div>

      <div className="review-section-2">
        <div className="review-title">
          <label>{title}</label>
        </div>
        <div className="star-rating-container">
          <StarRating score={rating} />
        </div>
      </div>
      <div className="review-text">
        <label>{text}</label>
      </div>
      <CustomerReviewBadge />
    </div>
  );
};

export default CustomerReview;
