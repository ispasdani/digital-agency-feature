import "./daysSchedule.css";
import { Link } from "react-router-dom";

export const DaysSchedule = () => {
  return (
    <div className="days-schedule">
      <div className="title-container">
        <p className="title">Suggested schedule for you...</p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-image-one"></div>
          <Link to="/digital-agency-feature/dayOne" className="card-content">
            <div>
              <p className="card-day">1st day</p>
              <p className="card-day-price">DKK127</p>
            </div>
            <p className="arrow-to-more">&#x2192;</p>
          </Link>
        </div>
        <div className="card">
          <div className="card-image-two"></div>
          <Link to="/digital-agency-feature/dayTwo" className="card-content">
            <div>
              <p className="card-day">2st day</p>
              <p className="card-day-price">DKK127</p>
            </div>
            <p className="arrow-to-more">&#x2192;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
