import React from "react";
import ProductListItems from "./ProductListItems.js";

import "./ProductList.css";

const ProductList = (props) => {
  const { products } = props;

  console.log("products list = ", products);

  return (
    <div className="flex-product-list-parent-container">
      <div className="product-list-container">
        {products.map((ele, idx) => (
          <ProductListItems
            key={idx}
            name={ele.name}
            price={ele.price}
            qty={ele.qty}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
