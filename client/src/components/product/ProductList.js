import React from "react";
import ProductListItems from "./ProductListItems.js";
import { withRouter } from "react-router-dom";

import "./ProductList.css";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="flex-product-list-parent-container">
      <div className="product-list-container">
        {products.map((product, idx) => (
          <ProductListItems
            key={idx}
            name={product.name}
            description={product.description}
            price={product.price}
            qty={product.qty}
          />
        ))}
      </div>
    </div>
  );
};

export default withRouter(ProductList);
