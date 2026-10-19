import React from "react";
import clearDay from "@meteocons/svg/monochrome/clear-day.svg";
import clearNight from "@meteocons/svg/monochrome/clear-night.svg";
import mostlyClearDay from "@meteocons/svg/monochrome/mostly-clear-day.svg";
import mostlyClearNight from "@meteocons/svg/monochrome/mostly-clear-night.svg";
import partlyCloudyDay from "@meteocons/svg/monochrome/partly-cloudy-day.svg";
import partlyCloudyNight from "@meteocons/svg/monochrome/partly-cloudy-night.svg";
import cloudy from "@meteocons/svg/monochrome/cloudy.svg";
import overcastRain from "@meteocons/svg/monochrome/overcast-rain.svg";
import overcastNightRain from "@meteocons/svg/monochrome/overcast-night-rain.svg";
import partlyCloudyDayRain from "@meteocons/svg/monochrome/partly-cloudy-day-rain.svg";
import partlyCloudyNightRain from "@meteocons/svg/monochrome/partly-cloudy-night-rain.svg";
import thunderstormsDay from "@meteocons/svg/monochrome/thunderstorms-day.svg";
import thunderstormsNight from "@meteocons/svg/monochrome/thunderstorms-night.svg";
import partlyCloudyDaySnow from "@meteocons/svg/monochrome/partly-cloudy-day-snow.svg";
import partlyCloudyNightSnow from "@meteocons/svg/monochrome/partly-cloudy-night-snow.svg";
import mist from "@meteocons/svg/monochrome/mist.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": clearDay,
    "clear-sky-night": clearNight,
    "few-clouds-day": mostlyClearDay,
    "few-clouds-night": mostlyClearNight,
    "scattered-clouds-day": partlyCloudyDay,
    "scattered-clouds-night": partlyCloudyNight,
    "broken-clouds-day": cloudy,
    "broken-clouds-night": cloudy,
    "shower-rain-day": overcastRain,
    "shower-rain-night": overcastNightRain,
    "rain-day": partlyCloudyDayRain,
    "rain-night": partlyCloudyNightRain,
    "thunderstorm-day": thunderstormsDay,
    "thunderstorm-night": thunderstormsNight,
    "snow-day": partlyCloudyDaySnow,
    "snow-night": partlyCloudyNightSnow,
    "mist-day": mist,
  };
  return (
    <div>
      <img
        src={codeMapping[props.code]}
        alt={props.description}
        width={85}
        height={85}
      />
    </div>
  );
}
