import React from "react";
import "./Weather.css";
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6;
  const hourDegrees = hours * 30 + minutes * 0.5;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setClock();
setInterval(setClock, 1000);


export default function Weather() {
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
              <div class="clock">
                <div class="namber namber12">12</div>
                <div class="namber namber3">3</div>
                <div class="namber namber6">6</div>
                <div class="namber namber9">9</div>
                <div class="hand hour-hand"></div>
                <div class="hand minute-hand"></div>
                <div class="hand second-hand"></div>
                <div class="center-dot"></div>
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
