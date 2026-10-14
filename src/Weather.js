import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherDate, setWeatherDate] = useState({ ready: false });
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6;
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  function handleResponse(response) {
    setWeatherDate({
      ready: true,
      date: "Wednesday 07:00",
      country: response.data.country,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
    // setReady(true);
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
                      <li>{weatherDate.date}</li>
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
                <form>
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="search"
                        placeholder="Enter a city..."
                        className="city-cerach"
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

                <div className="clock">
                  <div className="namber namber12">12</div>
                  <div className="namber namber3">3</div>
                  <div className="namber namber6">6</div>
                  <div className="namber namber9">9</div>
                  <div
                    className="hand hour-hand"
                    style={{
                      transform: `rotate(${hourDegrees}deg)`,
                    }}
                  />
                  <div
                    className="hand minute-hand"
                    style={{
                      transform: `rotate(${minuteDegrees}deg)`,
                    }}
                  />
                  <div
                    className="hand second-hand"
                    style={{
                      transform: `rotate(${secondDegrees}deg)`,
                    }}
                  />
                  <div className="center-dot"></div>
                </div>
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
    const apiKey = "7561c89f6et45b832o8e3c5fcade60b0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
