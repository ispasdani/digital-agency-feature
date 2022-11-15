import "./slideOne.css";
import { Link } from "react-router-dom";

export const SlideOne = () => {
  return (
    <div className="slide-one">
      <div className="title-container">
        <p className="title">
          Planning a city break in <span className="city-name">Aarhus</span>?
        </p>
      </div>
      <div className="question-container">
        <p className="question">How long will be your stay?</p>
        <p className="page-number">
          <span className="active-number">1</span>
          <span className="inactive-number">/</span>
          <span className="inactive-number">3</span>
        </p>
      </div>
      <input
        type="number"
        placeholder="Number of days..."
        required
        className="input-number"
      />
      <div className="btn-container">
        <Link to="/digital-agency-feature/slideTwo" className="btn">
          <p>&#x2192;</p>
          <p>Next</p>
        </Link>
      </div>
    </div>
  );
};
