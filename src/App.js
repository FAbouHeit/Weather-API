import React, { useState } from "react";
// import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import WeatherNow from "./components/WeatherToday";

import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";

import WeatherItem from "./components/WeatherItem";

import FakeWeather from "./data/FakeWeather.json";

const App = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  console.log(city)
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  let now_description = FakeWeather.list[0].weather[0].description;
  let forcastweather = FakeWeather.list.slice(0,7)
  return (
    <div className="app">
      <header>
          <input
            type="text"forcastWeather
            placeholder="Type in a city name"
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={()=> setCity(input)}>FIND WEATHER</button>
      </header>

      <main>
        <section className="weather-now">
          <WeatherNow
            src={snow}
            desc={now_description}
            tempFrom={FakeWeather.list[0].main.temp_min}
            tempTo={FakeWeather.list[0].main.temp_max}
            humidity={FakeWeather.list[0].main.humidity}
            pressure={FakeWeather.list[0].main.pressure}
          />
        </section>
        <section className="weather-week">
          <WeatherItem src={cloudy}  forcastweather={forcastweather}/>
        </section>
      </main>
    </div>
  );
};

export default App;
