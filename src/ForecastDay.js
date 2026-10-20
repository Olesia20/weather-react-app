import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <WeatherIcon code={props.data.condition.icon} />{" "}
        </div>
        <div className="col-9">
          <span className="forecast-day">{day()}</span>
          <span className="forecast-min">
            {" "}
            {Math.round(props.data.temperature.minimum)}° /
          </span>{" "}
          <strong className="forecast-max">
            {" "}
            {Math.round(props.data.temperature.maximum)}°
          </strong>
          <div className="text-capitalize" id="deskription">
            {props.data.condition.description}
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
