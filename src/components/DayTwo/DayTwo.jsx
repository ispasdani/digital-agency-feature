import "./dayTwo.css";
import data from "../../data/allData.json";
import { Link } from "react-router-dom";

export const DayTwo = () => {
  data.data.map((y) => {
    console.log(y.Name);
  });
  data.data.map((x) => {
    if (x.Name === "Juliette Cafe & Brasserie") {
      console.log(x);
    }
  });

  return (
    <div className="day-one">
      <div className="title-day">
        <Link to="/digital-agency-feature/dayOne" className="day-one-title">
          2st day <span>&#x2193;</span>
        </Link>
      </div>
      <div className="card-attraction">
        <div className="card-attraction-img-day-one"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "Sjette Frederiks Kro inn") {
              return (
                <div key={x.Id}>
                  <p className="card-attraction-title">{x.Name}</p>
                  <p className="card-attraction-text">
                    {x.Descriptions[4].Text}
                  </p>
                </div>
              );
            }
          })}
          <p className="card-price">Price: $$$</p>
          <div className="btn-to-map">&#x2192; See on the map</div>
        </div>
      </div>
      {/* second card */}
      <div className="card-attraction">
        <div className="card-attraction-img-day-two"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "Gender Blender") {
              return (
                <div key={x.Id}>
                  <p className="card-attraction-title">{x.Name}</p>
                  <p className="card-attraction-text">
                    {x.Descriptions[4].Text}
                  </p>
                </div>
              );
            }
          })}
          <p className="card-price">Price: $$$</p>
          <div className="btn-to-map">&#x2192; See on the map</div>
        </div>
      </div>
      {/* third card */}
      <div className="card-attraction">
        <div className="card-attraction-img-day-three"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "Restaurant LAVA") {
              return (
                <div key={x.Id}>
                  <p className="card-attraction-title">{x.Name}</p>
                  <p className="card-attraction-text">
                    {x.Descriptions[4].Text}
                  </p>
                </div>
              );
            }
          })}
          <p className="card-price">Price: $$$</p>
          <div className="btn-to-map">&#x2192; See on the map</div>
        </div>
      </div>
      {/* forth card */}
      <div className="card-attraction">
        <div className="card-attraction-img-day-forth"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "Salling Department Store") {
              return (
                <div key={x.Id}>
                  <p className="card-attraction-title">{x.Name}</p>
                  <p className="card-attraction-text">
                    {x.Descriptions[4].Text}
                  </p>
                </div>
              );
            }
          })}
          <p className="card-price">Price: $$$</p>
          <div className="btn-to-map">&#x2192; See on the map</div>
        </div>
      </div>
    </div>
  );
};
