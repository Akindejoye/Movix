import "./style.css";

const DisplayCard = (props) => {
  return (
    <div className="display__container">
      <div className="container-1">
        <div className="display__card-box">
          <img src={props.poster} alt="Poster" />
          <div className="display__cardbox">
            <span className="card-country">{props.country}</span>
            <h2>{props.name}</h2>
            <div className="card-rating">
              <div className="rating-imbd">
                <img src={props.imdb} alt="Imdb" className="card-imdb" />
                <span>{props.digit}</span>
              </div>
              <div className="rating-rate">
                <img src={props.apple} alt="Apple" />
                <p>{props.rating}</p>
              </div>
            </div>
            <h4 className="card-cathegory">{props.adventure}</h4>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="display__card-box">
          <img src={props.poster} alt="Poster" />
          <div className="display__cardbox">
            <span className="card-country">{props.country}</span>
            <h2>{props.name}</h2>
            <div className="card-rating">
              <div className="rating-imbd">
                <img src={props.imdb} alt="Imdb" className="card-imdb" />
                <span>{props.digit}</span>
              </div>
              <div className="rating-rate">
                <img src={props.apple} alt="Apple" />
                <p>{props.rating}</p>
              </div>
            </div>
            <h4 className="card-cathegory">{props.adventure}</h4>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="display__card-box">
          <img src={props.poster} alt="Poster" />
          <div className="display__cardbox">
            <span className="card-country">{props.country}</span>
            <h2>{props.name}</h2>
            <div className="card-rating">
              <div className="rating-imbd">
                <img src={props.imdb} alt="Imdb" className="card-imdb" />
                <span>{props.digit}</span>
              </div>
              <div className="rating-rate">
                <img src={props.apple} alt="Apple" />
                <p>{props.rating}</p>
              </div>
            </div>
            <h4 className="card-cathegory">{props.adventure}</h4>
          </div>
        </div>
      </div>
      <div className="container-4">
        <div className="display__card-box">
          <img src={props.poster} alt="Poster" />
          <div className="display__cardbox">
            <span className="card-country">{props.country}</span>
            <h2>{props.name}</h2>
            <div className="card-rating">
              <div className="rating-imbd">
                <img src={props.imdb} alt="Imdb" className="card-imdb" />
                <span>{props.digit}</span>
              </div>
              <div className="rating-rate">
                <img src={props.apple} alt="Apple" />
                <p>{props.rating}</p>
              </div>
            </div>
            <h4 className="card-cathegory">{props.adventure}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
