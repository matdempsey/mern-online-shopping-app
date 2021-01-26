import React, { useEffect, useState } from "react";
import CustomerReviewForm from "./CustomerReviewForm";
import CustomerReviewsList from "./CustomerReviewsList";

import "./CustomerReviewsContainer.css";

const CustomerReviewsContainer = (props) => {
  const { productID } = props;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/api/reviews/${productID}`)
      .then((res) => res.json())
      .then((res) => setReviews(res));
  }, [productID]);

  return (
    <div>
      <CustomerReviewForm productID={productID} />
      <div className="reviews-count-heading">
        <span> Customer Reviews ({reviews.length})</span>
      </div>
      {reviews.length > 0 ? (
        <CustomerReviewsList productID={productID} reviews={reviews} />
      ) : (
        <div className="no-reviews-alert">
          <span>There are currently no customer reviews for this product.</span>
        </div>
      )}
    </div>
  );
};

export default CustomerReviewsContainer;
