import React, { useEffect } from "react";
import CustomerReviewsList from "./CustomerReviewsList";
/* 
    TODO: 
    - render this component in Product.js
    - get product id from props  
    - fetch all reviews for the specific product using product id 
    - pass review results array to CustomerReviewsList.js
*/
const CustomerReviewsContainer = () => {
  useEffect(() => {
    //fetch
  }, []);

  return (
    <div>
      <CustomerReviewsList />
    </div>
  );
};

export default CustomerReviewsContainer;
