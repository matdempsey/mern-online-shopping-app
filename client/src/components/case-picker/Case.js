import React from "react";
import {
  CardDeck,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Input,
  Button,
} from "reactstrap";

import placeholderImage from "../../images/placeholder.png";

const Case = () => {
  const arr = [
    { name: "", image: placeholderImage, desc: "very good case, much cooling" },
    { name: "", image: placeholderImage, desc: "" },
    { name: "", image: placeholderImage, desc: "" },
    { name: "", image: placeholderImage, desc: "" },
    { name: "", image: placeholderImage, desc: "" },
  ];

  const cases = arr.map((ele) => {
    return (
      <Card>
        {/* <CardImg src="" alt={caseName ? caseName : "case"`${index}`} /> */}
        <CardImg width="" src={ele.image} alt={ele.name} />
        <CardBody>
          <CardSubtitle>{ele.desc}</CardSubtitle>
          <Input type="radio"></Input>
        </CardBody>
      </Card>
    );
  });

  return (
    <div>
      <CardDeck>{cases}</CardDeck>
    </div>
  );
};

export default Case;
