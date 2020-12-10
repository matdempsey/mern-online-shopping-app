import React, { useEffect, useState } from "react";

import "./Product.css";

const Product = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: null,
    inStock: null,
  });

  const { location, match } = props;

  // handle user manually entering in the url
  useEffect(() => {
    if (location.state) {
      const { name, description, price, inStock } = location.state;
      setProduct({
        name: name,
        description: description,
        price: price,
        inStock: inStock,
      });
    } else {
      fetch(`/api/products/${match.params.name}`)
        .then((res) => res.json())
        .then((res) => {
          const inStock = res.qty > 0 ? true : false;

          setProduct({
            name: res.name,
            description: res.description,
            price: res.price,
            inStock: inStock,
          });
        });
    }
  }, []);

  return (
    <>
      <div className="product-parent-container">
        <div className="product-container">
          {/* first row */}
          <div className="first-row">
            <div className="product-img-container">
              <img
                src="https://ipsumimage.appspot.com/576x500"
                alt={`${product.name}`}
              />
            </div>
            <div className="product-info-container">
              <h1>{product.name}</h1>
              <p>{product.price}</p>
            </div>
          </div>

          {/* second row */}
          <div className="product-desc-container">
            <h2>Product Information</h2>
            <hr />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
