import Tv from "../../assets/images/tv.svg";
import Search from "../../assets/images/search.svg";
import Dash from "../../assets/images/double_dash.svg";
import Imdb from "../../assets/images/imdb.svg";
import Apple from "../../assets/images/apple.svg";
import Play from "../../assets/images/play.svg";
import Single from "../../assets/images/single_dash.svg";
import "./style.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="top">
        <div className="left">
          <img src={Tv} alt="Logo" />
          <h3>Movix</h3>
        </div>
        <div className="center">
          <div className="center-box">
            <input type="text" placeholder="What do you want to watch?" />
            <img src={Search} alt="Search Icon" />
          </div>
        </div>
        <div className="right">
          <h3>Hi, Francis Akindejoye</h3>
          <div>
            <img src={Dash} alt="Dash" />
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="middle__left">
          <h1>
            John Wick 3: <br /> Parabellum
          </h1>
          <div className="middle__left-rating">
            <img src={Imdb} alt="Label" className="imdb" />
            <span>860/100</span>
            <img src={Apple} alt="Apple" className="apple" />
            <p>97%</p>
          </div>
          <div className="middle__left-description">
            <p>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </div>
          <button className="middle__left-button">
            <img src={Play} alt="Play Icon" />
            <span>Watch Trailer</span>
          </button>
        </div>
        <div className="middle__right">
          <span>1</span>
          <span>2</span>
          <span className="span-acitve">
            {/* <img src={Single} alt="Dash" /> */}3
          </span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
