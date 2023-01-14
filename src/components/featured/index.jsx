import Slider from "../slider/Slider";
import Red from "../../assets/images/arrow-right-red.svg";
import Poster from "../../assets/images/poster_small.svg";
import Imdb from "../../assets/images/imdb.svg";
import Apple from "../../assets/images/apple.svg";
import Batman from "../../assets/images/batman.svg";
import "./style.css";
import DisplayCard from "../displayCard";

const Featured = () => {
  const slides = [
    <DisplayCard
      poster={Poster}
      country="USA, 2018 - Current"
      name="Spider-Man : Into The Spider Verse"
      imdb={Imdb}
      digit="84.0 / 100"
      apple={Apple}
      rating="87%"
      adventure="Action, Adventure, Horror"
    />,
    <DisplayCard
      poster={Batman}
      country="USA, 2018 - Current"
      name="Spider-Man : Into The Spider Verse"
      imdb={Imdb}
      digit="84.0 / 100"
      apple={Apple}
      rating="87%"
      adventure="Action, Adventure, Horror"
    />,
  ];

  return (
    <div className="featured">
      <div className="fetured__top">
        <h1>Featured Movie</h1>
        <button>
          <span>See more</span>
          <img src={Red} alt="Right Pointer" />
        </button>
      </div>
      <Slider slides={slides} />
    </div>
  );
};

export default Featured;
