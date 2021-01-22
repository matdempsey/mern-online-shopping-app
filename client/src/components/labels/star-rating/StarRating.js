import React, { useEffect, useState } from "react";
import star from "../../../images/icons/star-rating-fill.png";
import starNoFill from "../../../images/icons/star-rating-no-fill.png";

import "./StarRating.css";
/* 
    TODO: 
    - read score from props, then render that many stars
*/
const StarRating = (props) => {
  const { score } = props;
  const [starRatingArr, setStarRatingArr] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      if (i > score) {
        setStarRatingArr((currState) => [
          ...currState,
          <img
            className="star-rating-img"
            src={starNoFill}
            alt="product star rating"
          />,
        ]);
      } else {
        setStarRatingArr((currState) => [
          ...currState,
          <img
            className="star-rating-img"
            src={star}
            alt="product star rating"
          />,
        ]);
      }
    }
  }, []);

  return (
    <div>
      <span>{starRatingArr.map((star) => star)}</span>
    </div>
  );
};

export default StarRating;
