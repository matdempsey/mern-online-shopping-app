import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Header from "../header/Header.js";
import NavBar from "../nav-bar/NavBar.js";
import StockStatus from "../labels/stock-status/StockStatus.js";
import AddToBasketButton from "../buttons/AddToBasketButton.js";
import CustomerReviewsContainer from "../customer-reviews/CustomerReviewsContainer.js";

import "./Product.css";

const Product = (props) => {
  const { location, match } = props;

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: null,
    qty: 0,
    imagePath: "",
  });
  const [activeTab, setActiveTab] = useState(1);

  // handle user manually entering in the url i.e. no location state
  useEffect(() => {
    if (location.state) {
      const { id, name, description, price, qty, imagePath } = location.state;
      setProduct({
        id: id,
        name: name,
        description: description,
        price: price,
        qty: qty,
        imagePath: imagePath,
      });
    } else {
      fetch(`/api/product/${match.params.name}`)
        .then((res) => res.json())
        .then((res) => {
          setProduct({
            ...product,
            id: res._id,
            name: res.name,
            description: res.description,
            price: res.price,
            qty: res.qty,
            imagePath: res.imagePath,
          });
        });
    }
  }, [location.pathname]);

  const handleActiveTabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex-product-parent-container">
        <div className="product-container">
          {/* first row */}
          <div className="flex-first-row">
            <div className="product-img-container">
              <img
                className="product-img"
                src={
                  product.imagePath
                    ? process.env.PUBLIC_URL + product.imagePath
                    : "https://ipsumimage.appspot.com/648x648"
                }
                alt={`${product.name} image`}
              />
            </div>
            <div className="product-info-container">
              <h1 className="product-heading">{product.name}</h1>
              <span className="product-price">£{product.price}</span>
              <StockStatus qty={product.qty} />
              <div className="product-basket-container">
                <AddToBasketButton />
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className="product-tab-container">
            <Nav tabs>
              <NavItem className={activeTab === 1 ? "active-tab" : null}>
                <NavLink
                  className="tab-nav-link"
                  onClick={() => {
                    handleActiveTabChange(1);
                  }}
                >
                  Description
                </NavLink>
              </NavItem>

              <NavItem className={activeTab === 2 ? "active-tab" : null}>
                <NavLink
                  className="tab-nav-link"
                  onClick={() => {
                    handleActiveTabChange(2);
                  }}
                >
                  Reviews
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane className="tab-pane" tabId={1}>
                {product.description}
              </TabPane>
              <TabPane className="tab-pane" tabId={2}>
                {product.id && (
                  <CustomerReviewsContainer productID={product.id} />
                )}
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
