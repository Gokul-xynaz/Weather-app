import React, { useState, useEffect } from "react";
import "./Weather.css";

const API_KEY = "ce5a031ad4e40ee48d50e2fc43b454e7";

function WeatherComponent({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeatherData({
          city: data.name,
          temp: Math.round(data.main.temp),
          condition: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      } else {
        alert("City not found!");
        setWeatherData(null);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        {weatherData ? (
          <div className="today-section">
            <img
              src={weatherData.icon}
              alt={weatherData.condition}
              className="weather-icon-main"
            />
            <div className="today-info">
              <h2>Today</h2>
              <h1>{weatherData.city}</h1>
              <p>Temperature: {weatherData.temp}°C</p>
              <p>{weatherData.condition}</p>
            </div>
          </div>
        ) : (
          <p>Search for a city to see the weather</p>
        )}

        <div className="forecast-section">
          <WeatherDay day="Wednesday" temperature="21°C" icon="02d.svg" />
          <WeatherDay day="Thursday" temperature="24°C" icon="03d.svg" />
          <WeatherDay day="Friday" temperature="21°C" icon="04d.svg" />
          <WeatherDay day="Saturday" temperature="24°C" icon="04d.svg" />
        </div>
      </div>
    </div>
  );
}

function WeatherDay({ day, temperature, icon }) {
  return (
    <div className="weather-day">
      <p>{day}</p>
      <img src={icon} alt="Weather Icon" className="weather-icon" />
      <p>{temperature}</p>
    </div>
  );
}

export default WeatherComponent;
