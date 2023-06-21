import { useState } from "react";
import "./App.css";
import moment from "moment/moment";

const api = {
  key: "8d3de42863d02dcf7de0d4788103a847",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const search = (evt) => {
    if (evt.key == "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return ` ${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="app-image">
      
      <main className="search">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
{(typeof weather.main != "undefined")?(
  <div>
  <div className="location-box">
  <div className="location">{weather.name},{weather.sys.country}</div>
  <div className="date">{dateBuilder(new Date())}</div>
</div>
<div className="weather-box">
  <div className="temp">{Math.round(weather.main.temp)}°C</div>
  <div className="weather">{weather.weather[0].main}</div>
</div>
</div>
):('')}
        


      </main>
    </div>
  );
}

export default App;
