import React from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleresponse(response) {
    console.log(response.data);
  }
  const apiKey = "7561c89f6et45b832o8e3c5fcade60b0";
  const longitude = props.coordinates.longitude;
  const latitude = props.coordinates.latitude;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleresponse);
  return (
    <div className="forecast">
      <h3>Forecast 5-day</h3>
      <div className="container-4">
        <div className="row">
          <div className="col-1">
            <WeatherIcon code="clear-sky-day" />{" "}
          </div>
          <div className="col-9">
            <span className="forecast-day">Monday</span>
            <span className="forecast-min"> 15° /</span>{" "}
            <strong className="forecast-max">28°</strong>
            <div className="forecast-description">Scattered clouds</div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
