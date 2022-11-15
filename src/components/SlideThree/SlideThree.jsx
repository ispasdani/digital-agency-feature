import "./slideThree.css";
import { Link } from "react-router-dom";

export const SlideThree = () => {
  return (
    <div className="slide-three">
      <div className="title-container">
        <p className="title">
          Planning a city break in <span className="city-name">Aarhus</span>?
        </p>
      </div>
      <div className="question-container">
        <p className="question">What is your budget?</p>
        <p className="page-number">
          <span className="active-number">3</span>
          <span className="inactive-number">/</span>
          <span className="inactive-number">3</span>
        </p>
      </div>
      <input
        type="number"
        placeholder="Amount of money..."
        required
        className="input-number"
      />
      <div className="btn-container">
        <Link to="/digital-agency-feature/daysSchedule" className="btn">
          <p>&#x2192;</p>
          <p>Next</p>
        </Link>
      </div>
    </div>
  );
};
