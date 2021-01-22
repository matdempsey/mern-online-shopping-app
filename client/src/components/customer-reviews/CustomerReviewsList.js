import React from "react";
import StarRating from "../labels/star-rating/StarRating";
import CustomerReview from "./CustomerReview";
import CustomerReviewForm from "./CustomerReviewForm";
/* 
    TODO: 
    - render CustomerReviewForm first
    - map customer reviews 
*/
const CustomerReviewsList = (props) => {
  return (
    <div>
      <CustomerReviewForm />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
    </div>
  );
};

export default CustomerReviewsList;
