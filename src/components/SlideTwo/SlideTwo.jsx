import "./slideTwo.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SlideTwo = () => {
  const [childrenNum, setChildrenNum] = useState(0);
  const [adultsNum, setAdultsNum] = useState(0);

  return (
    <div className="slide-two">
      <div className="title-container">
        <p className="title">
          Planning a city break in <span className="city-name">Aarhus</span>?
        </p>
      </div>
      <div className="question-container">
        <p className="question">How many people will travel?</p>
        <p className="page-number">
          <span className="active-number">3</span>
          <span className="inactive-number">/</span>
          <span className="inactive-number">3</span>
        </p>
      </div>
      <div className="adding-nums-container">
        <p>Adults</p>
        <div className="state-container">
          <div>
            <span onClick={() => setAdultsNum(adultsNum - 1)}>-</span>
          </div>
          <div>{adultsNum}</div>
          <div>
            <span onClick={() => setAdultsNum(adultsNum + 1)}>+</span>
          </div>
        </div>
        <p>Children</p>
        <div className="state-container">
          <div>
            <span onClick={() => setChildrenNum(childrenNum - 1)}>-</span>
          </div>
          <div>{childrenNum}</div>
          <div>
            <span onClick={() => setChildrenNum(childrenNum + 1)}>+</span>
          </div>
        </div>
      </div>
      <div className="question-container">
        <p className="question">What is your relationship?</p>
      </div>
      <div className="options-container">
        <select name="status" className="select-tag">
          <option value="couple">Couple</option>
          <option value="single">Single</option>
          <option value="friends">Friends</option>
        </select>
      </div>
      <div className="btn-container">
        <Link to="/digital-agency-feature/slideThree" className="btn">
          <p>&#x2192;</p>
          <p>Next</p>
        </Link>
      </div>
    </div>
  );
};
