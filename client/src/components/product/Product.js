import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import StockStatus from "../labels/stock-status/StockStatus.js";
import AddToBasketButton from "../buttons/AddToBasketButton.js";

import "./Product.css";

const Product = (props) => {
  const { location, match } = props;

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: null,
    qty: 0,
  });
  const [activeTab, setActiveTab] = useState(1);

  // handle user manually entering in the url
  useEffect(() => {
    if (location.state) {
      const { name, description, price, qty } = location.state;
      setProduct({
        name: name,
        description: description,
        price: price,
        qty: qty,
      });
    } else {
      fetch(`/api/products/${match.params.name}`)
        .then((res) => res.json())
        .then((res) => {
          setProduct({
            name: res.name,
            description: res.description,
            price: res.price,
            qty: res.qty,
          });
        });
    }
  }, []);

  const handleActiveTabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div className="flex-product-parent-container">
        <div className="product-container">
          {/* first row */}
          <div className="flex-first-row">
            <div className="product-img-container">
              <img src="" alt={`${product.name} image`} />
            </div>
            <div className="product-info-container">
              <h1>{product.name}</h1>
              <span>£{product.price}</span>
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
                ss
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
