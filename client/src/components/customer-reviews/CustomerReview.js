import React, { useState, useContext, useReducer } from "react";
import { GlobalContext } from "../../provider/GlobalProvider";
import StarRating from "../labels/star-rating/StarRating";
import { Label } from "reactstrap";
import CustomerReviewForm from "./CustomerReviewForm";
import CustomerReviewBadge from "./CustomerReviewBadge";

import editReviewIcon from "./../../images/icons/edit-review.png";

import "./CustomerReview.css";

const CustomerReview = (props) => {
  const {
    productID,
    reviewID,
    customerID,
    customerName,
    title,
    text,
    rating,
    datePosted,
    helpfulCount,
  } = props;

  const [editMode, setEditMode] = useState(false);
  const { isAuthenticated } = useContext(GlobalContext);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const formattedDate = new Date(datePosted).toLocaleDateString();

  return (
    <>
      {editMode ? (
        <div>
          <CustomerReviewForm
            editMode={editMode}
            setEditMode={setEditMode}
            productID={productID}
            reviewID={reviewID}
          />
        </div>
      ) : (
        <div className="customer-review-container">
          {isAuthenticated && user.id === customerID ? (
            <div className="edit-review-container">
              <img
                className="edit-review-img"
                src={editReviewIcon}
                alt="edit review button"
                onClick={() => setEditMode(true)}
              />
            </div>
          ) : null}

          <div className="review-date-container">
            <Label className="small-text">{formattedDate}</Label>
          </div>

          <div className="review-section-1">
            <span className="review-username"> {customerName}</span>
          </div>

          <div className="review-section-2">
            <div className="star-rating-container">
              <StarRating score={rating} />
            </div>
            <div className="review-title">
              <Label>{title}</Label>
            </div>
          </div>
          <div className="review-text">
            <Label>{text}</Label>
          </div>

          <div className="review-section-3">
            <CustomerReviewBadge
              productID={productID}
              reviewID={reviewID}
              helpfulCount={helpfulCount}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerReview;
