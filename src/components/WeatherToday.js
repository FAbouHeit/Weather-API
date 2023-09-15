import React from "react";
import cloudy from "../img/weather-icons/mostlycloudy.svg";

const WeatherNow = (props) => {
  return (
    <>
      <img src={props.src} width={500} height={400} alt="Weather icon" />
      <span className="weather-now-dis">{props.desc}</span>
      <div className="weather-now-bottom">
        <div className="weather-temp">
          <span>
            <strong>Temperature</strong>
          </span>
          <span>
            {props.tempFrom}&deg; to {props.tempTo}&deg; C
          </span>
        </div>
        <div className="weather-hum-pre">
          <span>
            <strong>Humidity</strong>
          </span>{" "}
          <span>{props.humidity}%</span>{" "}
          <span>
            <strong>Pressure</strong>
          </span>{" "}
          <span>{props.pressure}</span>
        </div>
      </div>
    </>
  );
};

export default WeatherNow;
