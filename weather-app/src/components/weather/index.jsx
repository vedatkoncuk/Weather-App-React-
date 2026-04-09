import React, { useState } from 'react';
import Search from '../search';

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${param}&appid=d4dd59031b897db67b251de8dba0b691`
      );

      const data = await response.json(); // 🔥 await eksikti

      console.log(data, "data");
    } catch (err) {
      console.log(err);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  return (
    <Search
      search={search}
      setSearch={setSearch}
      handleSearch={handleSearch}
    />
  );
}

export default Weather;