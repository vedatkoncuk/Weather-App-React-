function Search({ city, setCity, fetchWeather, data, loading, error }) {
  const now = new Date();

  const getWeatherClass = () => {
    if (!data) return "default";

    const weather = data.weather[0].main;

    switch (weather) {
      case "Clear":
        return "clear";
      case "Clouds":
        return "clouds";
      case "Rain":
        return "rain";
      case "Snow":
        return "snow";
      default:
        return "default";
    }
  };

  return (
    <div className={`app-container ${getWeatherClass()}`}>

      <div className="search-box">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchWeather();
            }
          }}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}

      {data && (
        <div className="weather-card">

          <div className="header">
            <h2>{data.name}</h2>
            <p>{now.toLocaleDateString()} • {now.toLocaleTimeString()}</p>
          </div>

          <div className="weather-grid">

            <div className="card">
              <p>Temperature</p>
              <h3>{data.main.temp}°C</h3>
            </div>

            <div className="card">
              <p>Weather</p>
              <h3>{data.weather[0].main}</h3>
            </div>

            <div className="card">
              <p>Wind</p>
              <h3>{data.wind.speed} m/s</h3>
            </div>

            <div className="card">
              <p>Humidity</p>
              <h3>{data.main.humidity}%</h3>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default Search;