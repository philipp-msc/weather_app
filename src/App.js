import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import CitySelector from './components/CitySelector';
import './App.css';  

const API_KEY = '044c98460f46e03cc74bd3d0df14cf50'; 
function App() {
  const [city, setCity] = useState('Moscow');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const geocodeResponse = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        );
        const { lat, lon } = geocodeResponse.data[0];

        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`
        );

        setWeatherData(weatherResponse.data);
      } catch (error) {
        console.error('Ошибка получения данных:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CitySelector setCity={setCity} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
