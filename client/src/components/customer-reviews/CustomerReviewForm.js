import React, { useContext, useState } from "react";
import { GlobalContext } from "../../provider/GlobalProvider";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import star from "../../images/icons/star-rating-fill.png";

import "./CustomerReviewForm.css";

// TODO: review character limit
const CustomerReviewForm = (props) => {
  const { editMode, productID, reviewID } = props;
  const { isAuthenticated } = useContext(GlobalContext);

  const [review, setReview] = useState({
    customerName: localStorage.getItem("currentUser"),
    title: "",
    text: "",
    rating: null,
  });

  const onReviewTitleChange = (e) => {
    setReview({ ...review, title: e.target.value });
  };

  const onRatingChange = (e) => {
    setReview({ ...review, rating: e.target.value });
  };

  const onReviewTextChange = (e) => {
    setReview({ ...review, text: e.target.value });
  };

  const onSubmit = () => {
    if (editMode) {
      fetch(`/api/products/${productID}/reviews/${reviewID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
    } else {
      fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productID: productID, review }),
      });
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="review-form-container">
          <Form>
            <FormGroup className="fg-1">
              <span className="fg-1-review-username">
                {review.customerName}
              </span>
            </FormGroup>

            <FormGroup className="fg-2">
              <div className="fg-2-title">
                <Label for="title">Title</Label>
                <Input onChange={onReviewTitleChange} />
              </div>
              <div className="fg-2-rating">
                <span>
                  Rating
                  <img className="fg-2-star-img" src={star} alt="star" />
                </span>
                <Input type="select" onChange={onRatingChange}>
                  <option hidden></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </div>
            </FormGroup>

            <FormGroup className="fg-3">
              <Input
                id="fg-3-review-textarea"
                type="textarea"
                placeholder="Share your thoughts on this product.."
                maxLength="1000"
                onChange={onReviewTextChange}
              />
              <label className="fg-3-char-limit">
                Characters remaining: 1000{" "}
              </label>
            </FormGroup>

            <div className="submit-review-btn-container">
              <Button color="success" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        <div className="review-span-container">
          <span>
            Only registered customers can write a review. Please
            <Link to="/login"> log-in</Link> or
            <Link to="/create-account"> create an account</Link>.
          </span>
        </div>
      )}
    </>
  );
};

export default CustomerReviewForm;
