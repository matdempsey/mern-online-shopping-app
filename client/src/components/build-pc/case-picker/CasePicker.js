import React from "react";
import {
  CardDeck,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Input,
} from "reactstrap";
import FurtherInfo from "../../common/modals/FurtherInfo.js";
import placeholderImage from "../../../images/placeholder.png";

const CasePicker = () => {
  const arr = [
    {
      name: "",
      image: placeholderImage,
      desc: "",
    },
    { name: "", image: placeholderImage, desc: "" },
    { name: "", image: placeholderImage, desc: "" },
    { name: "", image: placeholderImage, desc: "" },
    { name: "", image: placeholderImage, desc: "" },
  ];

  const cases = arr.map((ele, idx) => {
    return (
      <Card>
        {/* <CardImg src="" alt={caseName ? caseName : "case"`${index}`} /> */}
        <CardImg
          width=""
          src={ele.image}
          alt={ele.name ? ele.name : `case ${idx}`}
          onClick={""}
        />
        <CardBody>
          <CardTitle>{ele.name}</CardTitle>
          <Input type="radio" />
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

export default CasePicker;
