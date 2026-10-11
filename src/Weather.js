import React from "react";
import axios from "axios";
export default function Weather(props) {
    function handleResponse(response) {
        alert(`The Weather in ${response.data.city} ${response.data.temperature.current}°C`);
      console.log(response.data);
    }
   
    let key = "7561c89f6et45b832o8e3c5fcade60b0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${key}`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Weather App</h2>
    )
}