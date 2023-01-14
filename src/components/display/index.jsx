import DisplayCard from "../displayCard";
import Poster from "../../assets/images/poster_small.svg";
import Imdb from "../../assets/images/imdb.svg";
import Apple from "../../assets/images/apple.svg";
import "./style.css";

const Display = () => {
  return (
    <div className="display__card">
      <DisplayCard
        poster={Poster}
        country="USA, 2018 - Current"
        name="Spider-Man : Into The Spider Verse"
        imdb={Imdb}
        digit="84.0 / 100"
        apple={Apple}
        rating="87%"
        adventure="Action, Adventure, Horror"
      />
      {/* <DisplayCard
        poster={Poster}
        country="USA, 2018 - Current"
        name="Batman Begins"
        imdb={Imdb}
        digit="84.0 / 100"
        apple={Apple}
        rating="87%"
        adventure="Action, Adventure, Horror"
      /> */}
      {/* <DisplayCard
        poster={Poster}
        country="USA, 2018 - Current"
        name="Stranger Things"
        imdb={Imdb}
        digit="84.0 / 100"
        apple={Apple}
        rating="87%"
        adventure="Action, Adventure, Horror"
      /> */}
      {/* <DisplayCard
        poster={Poster}
        country="USA, 2018 - Current"
        name="Dunkirk"
        imdb={Imdb}
        digit="84.0 / 100"
        apple={Apple}
        rating="87%"
        adventure="Action, Adventure, Horror"
      /> */}
    </div>
  );
};

export default Display;
