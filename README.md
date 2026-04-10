# 🌤️ Weather App (React)

This is a modern and simple Weather Application built with React.  
Users can search for a city and see real-time weather information.

---

## 🚀 Features

- 🔍 Search weather by city name
- ⌨️ Search with Enter key
- 🌡️ Display temperature, wind, humidity and weather condition
- 🎨 Dynamic background based on weather condition
- ⚡ Fast and responsive UI
- 🧼 Input reset after search

---

## 🛠️ Technologies Used

- ⚛️ React (Functional Components & Hooks)
- 📦 useState & useEffect
- 🌐 Fetch API (for data fetching)
- 🔗 REST API integration
- 🎨 CSS (Modern UI design)
- ⚡ JavaScript (ES6+)

---

## 🌍 API

This project uses the OpenWeatherMap API:

https://api.openweathermap.org/

Data is fetched using:

```js
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY&units=metric`)