import { useState } from "react";
import Right from "../../assets/images/arrow-right.svg";
import Left from "../../assets/images/arrow-left.svg";
import "./slider.css";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "120px",
  };

  const dotStyles = {
    cursor: "pointer",
    color: "#D9D9D9",
    fontSize: "30px",
    marginRight: "12px",
    // transition: "100ms ease-in-out",
  };
  const dotStylesActive = {
    cursor: "pointer",
    color: "#2DD705",
    fontSize: "50px",
    marginRight: "12px",
  };

  return (
    <>
      <div className="slider">
        <div className="leftArrow" onClick={gotToPrevious}>
          <img src={Left} alt="" />
        </div>
        <div className="rightArrow" onClick={gotToNext}>
          <img src={Right} alt="" />
        </div>
        <div className="slides">{slides[currentIndex]}</div>
      </div>
    </>
  );
};

export default Slider;
