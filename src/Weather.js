import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Clock from "./Clock";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherDate, setWeatherDate] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherDate({
      ready: true,
      date: new Date(response.data.time * 1000),
      country: response.data.country,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }
  function search() {
    const apiKey = "7561c89f6et45b832o8e3c5fcade60b0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handelSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (weatherDate.ready) {
    return (
      <div className="container-fluid Weather">
        <div className="container text-center ">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="container-1">
                <div className="row">
                  <div className="col-7">
                    <h3>{props.defaultCity}</h3>
                    <h6> {weatherDate.country}</h6>
                    <ul>
                      <li>
                        <FormattedDate date={weatherDate.date} />
                      </li>
                      <li className="text-capitalize">
                        {weatherDate.description}
                      </li>
                    </ul>
                  </div>
                  <div className="col-5">
                    <h2>{Math.round(weatherDate.temperature)}°C</h2>
                    <img src={weatherDate.icon} alt={weatherDate.description} />
                  </div>
                </div>
                <form onSubmit={handelSubmit}>
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="search"
                        placeholder="Enter a city..."
                        className="city-cerach"
                        onChange={changeCity}
                      />
                    </div>
                    <div className="col-4">
                      <input type="submit" value="Search" className="search" />
                    </div>
                  </div>
                </form>
                <div className="container-3">
                  <ul>
                    <li>Fells like: {Math.round(weatherDate.feels_like)}°C</li>
                    <li>Humidity: {weatherDate.humidity}%</li>
                    <li>Wind: {Math.round(weatherDate.wind)} Km/H</li>
                  </ul>
                </div>
                <Clock />
              </div>
            </div>
            <div className="col-12 col-md-6">
              {" "}
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
