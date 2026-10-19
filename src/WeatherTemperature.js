import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function temparatureFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function temparatureCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        {Math.round(props.celsius)}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={temparatureFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        {Math.round(fahrenheit)}
        <span className="unit">
          <a href="/" onClick={temparatureCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
