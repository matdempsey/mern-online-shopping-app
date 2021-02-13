import React, { useContext, useState } from "react";
import { GlobalContext } from "../../provider/GlobalProvider";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import star from "../../images/icons/star-rating-fill.png";

import "./CustomerReviewForm.css";

// TODO: review character limit
const CustomerReviewForm = (props) => {
  const { editMode, setEditMode, productID, reviewID } = props;
  const { isAuthenticated } = useContext(GlobalContext);

  const [review, setReview] = useState({
    customerName: localStorage.getItem("currentUser"),
    title: "",
    text: "",
    rating: null,
  });

  const [charCount, setCharCount] = useState(1000);
  const [charLimitReached, setCharLimitReached] = useState(false);

  const onReviewTitleChange = (e) => {
    setReview({ ...review, title: e.target.value });
  };

  const onRatingChange = (e) => {
    setReview({ ...review, rating: e.target.value });
  };

  const onReviewTextChange = (e) => {
    setReview({ ...review, text: e.target.value });

    const maxLength = e.target.maxLength;
    const currentLength = e.target.value.length;
    setCharCount(maxLength - currentLength);

    if (currentLength === maxLength) setCharLimitReached(true);

    if (charLimitReached) setCharLimitReached(false);
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
      setEditMode(false);
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
              <div className="fg-3-char-limit-container">
                <label
                  className={
                    charLimitReached ? "fg-3-char-limit-max" : "fg-3-char-limit"
                  }
                >
                  Characters remaining: {charCount}
                </label>
              </div>
            </FormGroup>

            <div className="review-btn-container">
              {editMode && (
                <div id="cancel-edit-btn-container">
                  <Button color="secondary" onClick={() => setEditMode(false)}>
                    Cancel Edit
                  </Button>
                </div>
              )}
              <div>
                <Button color="secondary" onClick={onSubmit}>
                  Submit
                </Button>
              </div>
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
