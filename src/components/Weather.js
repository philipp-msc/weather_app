import React from 'react';

function Weather({ data }) {
  const currentWeather = data.current;
  const dailyWeather = data.daily.slice(1, 6);

  return (
    <div>
      <h2>Current Weather:</h2>
      <div>
        <p>Temperature: {currentWeather.temp}°C</p>
        <p>Weather: {currentWeather.weather[0].description}</p>
      </div>

      <h2>5-Day Forecast:</h2>
      <div>
        {dailyWeather.map((day, index) => (
          <div key={index}>
            <p>Day {index + 1} - Temp: {day.temp.day}°C, {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
