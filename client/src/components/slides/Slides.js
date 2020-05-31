import React, { useState } from "react";
import noImageFound from "../../images/no-image-found.png";
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
} from "reactstrap";

const slideItems = [
  {
    src: noImageFound,
    altText: "insert alt text 1",
    caption: "insert capton text 1",
  },
  {
    src: noImageFound,
    altText: "insert alt text 2",
    caption: "insert capton text 2",
  },
  {
    src: noImageFound,
    altText: "insert alt text 3 ",
    caption: "insert capton text 3",
  },
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setAnimating] = useState(false);

  const next = () => {
    if (!isAnimating) {
      const nextSlide =
        currentSlide === slideItems.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }
  };

  const previous = () => {
    if (!isAnimating) {
      const previousSlide =
        currentSlide === 0 ? slideItems.length - 1 : currentSlide - 1;
      setCurrentSlide(previousSlide);
    }
  };

  const select = (newSlide) => {
    console.log("new slide = ", newSlide);
    if (!isAnimating) {
      setCurrentSlide(newSlide);
    }
  };

  // for each item in slideItems[] perform
  const slides = slideItems.map((item, idx) => {
    console.log(idx);
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={idx}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.captionText}
          captionHeader={item.captionText}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="Slides">
      <Carousel activeIndex={currentSlide} next={next} previous={previous}>
        <CarouselIndicators
          items={slideItems}
          activeIndex={currentSlide}
          onClickHandler={select}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default Slides;
