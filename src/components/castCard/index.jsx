import Video from "../../assets/images/video.svg";
import "./style.css";

const CastCard = (props) => {
  return (
    <div className="castCard">
      <div className="castCard-1">
        <div className="castCard__card-box">
          <img src={props.poster} alt="Poster" />
          <h2>{props.name}</h2>
        </div>
      </div>
      <div className="castCard-2">
        <div className="castCard__card-box">
          <img src={props.poster} alt="Poster" />
          <h2>{props.name}</h2>
        </div>
      </div>
      <div className="castCard-3">
        <div className="castCard__card-box-3">
          <img src={props.poster} alt="Poster" />
          <h2>{props.name}</h2>
        </div>
      </div>
      <div className="castCard-4">
        <div className="castCard__card-box-3">
          <img src={props.poster} alt="Poster" />
          <h2>{props.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CastCard;
