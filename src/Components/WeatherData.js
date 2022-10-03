import React, { useState } from "react";
import "./LandingPage.css";
export const WeatherData = ({ weatherData }) => {
  const [showData, setShowData] = useState(false);
  const handleClick = () => {
    setShowData(!showData);
  };
  var t1 = new Date(weatherData.sys.sunrise);
  var hours1 = t1.getHours();
  var minutes1 = t1.getMinutes();
  var t2 = new Date(weatherData.sys.sunset);
  var hours2 = t2.getHours();
  var minutes2 = t2.getMinutes();

  var newformat1 = t1.getHours() >= 12 ? "PM" : "AM";
  var newformat2 = t2.getHours() >= 12 ? "PM" : "AM";
  return (
    <div>
      <div className="container">
        <h1>Current Condition in pune</h1>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>Temp :{weatherData.main.temp}</p>
        <p>Max temp: {weatherData.main.temp_max}</p>
        <p>Min temp:{weatherData.main.temp_min}</p>
      </div>
      <button onClick={handleClick}>Show more data</button>
      {showData != true ? (
        <div></div>
      ) : (
        <div>
          <p>Wind speed :{weatherData.wind.speed}</p>
          <p>Humidity :{weatherData.main.humidity}</p>
          <p>Pressure :{weatherData.main.pressure}</p>
          <p>
            Sunrise/Sunset :{hours1}:{minutes1} {newformat1}/{hours2}:{minutes2}
            {newformat2}
          </p>
        </div>
      )}
    </div>
  );
};
