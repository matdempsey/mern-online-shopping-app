import React, { useContext, useState } from "react";
import { GlobalContext } from "../../provider/GlobalProvider";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";
import avatar from "../../images/icons/avatar.png";
import star from "../../images/icons/star-rating-fill.png";

import "./CustomerReviewForm.css";
/* 
    TODO: 
    - if user is logged in (isAuthenticated -- useContext()) allow user to write review 
    - if user is not logged in, show message "Only registered customers can write a review. log-in or create account? "     
    - review character limit
*/
const CustomerReviewForm = (props) => {
  const { productID } = props;
  const { isAuthenticated } = useContext(GlobalContext);
  const [review, setReview] = useState({
    productID: "",
    customerName: "",
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
    fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review }),
    });
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="review-form-container">
          <Form>
            <FormGroup className="fg-1">
              <img className="fg-1-avatar" src={avatar} alt="avatar" />
              <span className="fg-1-review-username">username</span>
            </FormGroup>

            <FormGroup className="fg-2">
              <div className="fg-2-title">
                <label>Title</label>
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
              <Button
                className="submit-review-btn"
                color="success"
                onClick={onSubmit}
              >
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
