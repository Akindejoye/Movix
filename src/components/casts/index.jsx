import Slider from "../slider/Slider";
import CastCard from "../castCard";
import Red from "../../assets/images/arrow-right-red.svg";
import CastOne from "../../assets/images/cast-1.svg";
import CastTwo from "../../assets/images/cast-2.svg";
import "./style.css";

const Casts = () => {
  const slides = [
    <CastCard poster={CastOne} name="Keanu Reeves" />,
    <CastCard poster={CastTwo} name="Chloe Grace Moretz" />,
  ];

  return (
    <div className="newArrival">
      <div className="newArrival__top">
        <h1>Featured Casts</h1>
        <button>
          <span>See more</span>
          <img src={Red} alt="Right Pointer" />
        </button>
      </div>
      <Slider slides={slides} />
    </div>
  );
};

export default Casts;
