import { useEffect, useState } from "react";
import Search from "../search/index.jsx";

function Weather() {
  const [city, setCity] = useState("New York");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, [])

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4dd59031b897db67b251de8dba0b691&units=metric`
      );

      if (!response.ok) throw new Error("City not found");

      const result = await response.json();
      setData(result);

      setCity("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Search
      city={city}
      setCity={setCity}
      fetchWeather={fetchWeather}
      data={data}
      loading={loading}
      error={error}
    />
  );
}

export default Weather;