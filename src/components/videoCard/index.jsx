import Video from "../../assets/images/video.svg";
import "./style.css";

const VideoCard = (props) => {
  return (
    <div className="videoCard">
      <div className="videoCard-1">
        <div className="videoCard__card-box">
          <img src={props.poster} alt="Poster" />
          <h2>{props.name}</h2>
          <img src={Video} alt="Video Icon" className="videoCard__icon" />
        </div>
      </div>
      <div className="videoCard-2">
        <div className="videoCard__card-box">
          <img src={props.poster} alt="Poster" />
          <h2>{props.name}</h2>
          <img src={Video} alt="Video Icon" className="videoCard__icon" />
        </div>
      </div>
      <div className="videoCard-3">
        <div className="videoCard__card-box-3">
          <img src={props.posterThree} alt="Poster" />
          <h2>{props.nameThree}</h2>
          <img src={Video} alt="Video Icon" className="videoCard__icon" />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
