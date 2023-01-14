import Slider from "../slider/Slider";
import Red from "../../assets/images/arrow-right-red.svg";
import Imdb from "../../assets/images/imdb.svg";
import Apple from "../../assets/images/apple.svg";
import Batman from "../../assets/images/batman.svg";
import CardOne from "../../assets/images/card-1.svg";
import CardThree from "../../assets/images/card-3.svg";
import DisplayCard from "../displayCard";
import VideoCard from "../videoCard";
import "./style.css";

const Videos = () => {
  const slides = [
    <VideoCard
      poster={CardOne}
      name="Lamb (2021) Trailler"
      posterThree={CardThree}
      nameThree="Lamb (2021) Trailler"
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
    <div className="newArrival">
      <div className="newArrival__top">
        <h1>Exclusive Videos</h1>
        <button>
          <span>See more</span>
          <img src={Red} alt="Right Pointer" />
        </button>
      </div>
      <Slider slides={slides} />
    </div>
  );
};

export default Videos;
