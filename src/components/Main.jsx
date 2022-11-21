import React from "react";
import "./main.css";
import locate from "./image/location.png";

const Main = (props) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={props.data.imageUrl} alt="img" />
        <div className="location">
          <img src={locate} className="locate" alt="img" />
          <p>{props.data.location}</p>
          <span className="map">
            <a href={props.data.googleMapsUrl} target="blank">
              View on google
            </a>
          </span>
        </div>
        <h1 className="title">Mount Fuji</h1>
        <p className="date">{`${props.data.startDate} - ${props.data.endDate}`}</p>
        <section>
          <p className="desc">{props.data.description}</p>
        </section>
      </div>
      <hr />
    </>
  );
};

export default Main;
