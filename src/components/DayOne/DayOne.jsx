import "./dayOne.css";
import data from "../../data/allData.json";
import { Link } from "react-router-dom";

export const DayOne = () => {
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
        <Link to="/digital-agency-feature/dayTwo" className="day-one-title">
          1st day <span>&#x2193;</span>
        </Link>
      </div>
      <div className="card-attraction">
        <div className="card-attraction-img-one"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "Juliette Cafe & Brasserie") {
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
        <div className="card-attraction-img-two"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "ARoS Aarhus Art Museum") {
              return (
                <div key={x.Id}>
                  <p className="card-attraction-title">{x.Name}</p>
                  <p className="card-attraction-text">
                    {x.Descriptions[3].Text}
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
        <div className="card-attraction-img-three"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "Salling ROOFTOP") {
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
        <div className="card-attraction-img-forth"></div>
        <div className="card-attraction-info">
          {data.data.map((x) => {
            if (x.Name === "Aarhus Street Food") {
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
