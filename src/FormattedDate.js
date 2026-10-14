import React from "react";
export default function FormattedDate(props) {
 
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sturday",
  ];
  let monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];
  let day = days[props.date.getDay()];
  let dayDate = props.date.getDate();
  let month = monthes [props.date.getMonth()];
  let houres = props.date.getHours();
  if (houres < 10) {
    houres = `0${houres}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {month} {dayDate}, {""} {houres}:{minutes}
    </div>
  );
}
