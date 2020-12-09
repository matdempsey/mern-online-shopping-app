import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductContainer = (props) => {
  const { match } = props;
  const { type } = match.params;

  const [products, setProducts] = useState([]);

  // const formatParamStringForFetch = (paramString) => {
  //   const replacedString = paramString.replaceAll("-", " ");

  //   const string2 = replacedString.endsWith("s")
  //     ? replacedString.substring(0, replacedString.length - 1)
  //     : replacedString;

  //   const splitString = string2.split(" ");

  //   const capitilisedString = splitString.map(
  //     (word) => word.charAt(0).toUpperCase() + word.slice(1)
  //   );

  //   const formattedString = capitilisedString.join(" ");

  //   return formattedString;
  // };

  useEffect(() => {
    // const componentType = formatParamStringForFetch(type);
    // console.log("formatted component type  =", componentType);

    let componentType = "";

    switch (type) {
      case "motherboards":
        componentType = "Motherboard";
        break;

      case "processors":
        componentType = "Processor";
        break;

      case "graphics-cards":
        componentType = "Graphics Card";
        break;

      case "memory":
        componentType = "Memory";
        break;

      case "storage":
        componentType = "Storage";
        break;

      case "power-supplies":
        componentType = "Power Supply";
        break;

      default:
        break;
    }

    fetch(`/api/components/${componentType}`).then((res) =>
      res.json().then((res) => setProducts(res))
    );
  }, [type]);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductContainer;
