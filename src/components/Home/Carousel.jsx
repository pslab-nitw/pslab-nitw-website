import React, { useState, useEffect, useRef } from "react";
import CarouselContents from "./CarouselContents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function Carousel() {
  const [ind, setInd] = useState(0);
  const leftImgRef = useRef(null);
  const imgRef = useRef(null);
  const rightImgRef = useRef(null);
  const txtRef = useRef(null);
  function handleDotClick(index) {
    if (index > ind) {
      getNextImage(index - 1);
    } else if (index < ind) {
      getPrevImage(index + 1);
    }
  }
  function getNextImage(index) {
    var new_index = (index + 1) % CarouselContents.length;
    if (imgRef.current) {
      imgRef.current.style.animationName = "decWidth";
      rightImgRef.current.style.animationName = "incWidth";
      txtRef.current.style.animationName = "fadeOut";
      setTimeout(() => {
        txtRef.current.style.animationName = "fadeIn";
        setInd(new_index);
      }, 500);
    }
  }

  function getPrevImage(index) {
    var new_index =
      (index + CarouselContents.length - 1) % CarouselContents.length;
    if (imgRef) {
      imgRef.current.style.animationName = "decWidthRight";
      leftImgRef.current.style.animationName = "incWidth";
      txtRef.current.style.animationName = "fadeOut";
      setTimeout(() => {
        setInd(new_index);
        txtRef.current.style.animationName = "fadeIn";
      }, 500);
    }
  }
  useEffect(() => {
    rightImgRef.current.style.animationName = "";
    imgRef.current.style.animationName = "";
    leftImgRef.current.style.animationName = "";
    const timer = setTimeout(() => {
      getNextImage(ind);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [ind]);
  return (
    <div className="carousel">
      <div className="slider">
        <div className="images">
          <img
            className="left"
            src={
              CarouselContents[
                (ind + CarouselContents.length - 1) % CarouselContents.length
              ].img
            }
            alt="image"
            ref={(el) => (leftImgRef.current = el)}
          />
          <img
            className="center"
            src={CarouselContents[ind].img}
            alt="image"
            ref={(el) => (imgRef.current = el)}
          />
          <img
            className="right"
            src={CarouselContents[(ind + 1) % CarouselContents.length].img}
            alt="image"
            ref={(el) => (rightImgRef.current = el)}
          />
        </div>
        <ArrowForwardIosIcon
          className="next-button"
          onClick={() => {
            getNextImage(ind);
          }}
        />
        <ArrowBackIosNewIcon
          className="previous-button"
          onClick={() => {
            getPrevImage(ind);
          }}
        />
        <ul className="indicator">
          {CarouselContents.map((el, index) =>
            index === ind ? (
              <li
                key={index}
                className="white-dot"
                onClick={() => handleDotClick(index)}
              ></li>
            ) : (
              <li
                key={index}
                className="gray-dot"
                onClick={() => handleDotClick(index)}
              ></li>
            )
          )}
        </ul>
      </div>
      <div className="carousel-text">
        <p ref={(el) => (txtRef.current = el)}>{CarouselContents[ind].text}</p>
      </div>
    </div>
  );
}
export default Carousel;
