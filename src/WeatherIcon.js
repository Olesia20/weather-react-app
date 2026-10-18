import React from "react";
import clearDay from "@meteocons/svg/monochrome/clear-day.svg";
import manifest from "@meteocons/svg/manifest.json";



export default function WeatherIcon(props) {
   const allIcons = manifest.categories.flatMap((category) => category.icons);
   console.log(allIcons);
  return (
    <div>
      <img src={clearDay} alt="Clear day" width="64" />
    </div>
  );
}
