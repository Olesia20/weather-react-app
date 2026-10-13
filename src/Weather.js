import React, { useState, useEffect } from "react";
import "./Weather.css";

export default function Weather() {
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

  return (
    <div className="container-fluid Weather">
      <div className="container text-center ">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container-1">
              <div className="row">
                <div className="col-6">
                  <h3>Kyiv</h3>
                  <ul>
                    <li>Wednesday: 07:00</li>
                    <li>Mostly cloudy</li>
                  </ul>
                </div>
                <div className="col-6">
                  <h2>25°C</h2>
                  <img
                    src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                    alt="mostly cloudy"
                  />
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
                  <li>Fells like: 23°C</li>
                  <li>Humidity: 56%</li>
                  <li>Wind: 6 Km/H</li>
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
            <div className="container-2">
              <h3>Forecast</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
