import axios from "axios";
import React, { useEffect, useState } from "react";
import { WeatherData } from "./WeatherData";

export default function LandingPage() {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .post(
          "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=de4c3bc05266d1dd1a914916b057ebf5"
        )
        .then((resp) => {
          console.log(resp);
          setWeatherData(resp.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      {typeof weatherData.main != "undefined" ? (
        <WeatherData weatherData={weatherData} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
