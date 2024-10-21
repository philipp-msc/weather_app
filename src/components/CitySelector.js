import React from 'react';

function CitySelector({ setCity }) {
  const cities = ['Moscow', 'New York', 'Tokyo', 'London', 'Paris'];

  return (
    <div>
      <h2>Select a city:</h2>
      <select onChange={(e) => setCity(e.target.value)}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
