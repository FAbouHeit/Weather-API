import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Fuad"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {

    let now_description = FakeWeather.list[0].weather[0].description;
    // let now_description = FakeWeather.list[0].dt;

    // let now_description = "hola";


    return (
      <div className="app">

        <header>
          <form>
            <input type="text" placeholder="Type in a city name"></input>
            <button>FIND WEATHER</button>
          </form>
        </header>

        <main>
          <section className="weather-now">
            <WeatherNow src={snow} desc={now_description} tempFrom={FakeWeather.list[0].main.temp_min} tempTo={FakeWeather.list[0].main.temp_max} humidity={FakeWeather.list[0].main.humidity} pressure={FakeWeather.list[0].main.pressure} />
          </section>
          <section className="weather-week">

            {/* <WeatherItem src={cloudy} time={num_time} temp={num_temp} />
            <WeatherItem src={cloudy} time={num_time} temp={num_temp} />
            <WeatherItem src={cloudy} time={num_time} temp={num_temp} />
            <WeatherItem src={cloudy} time={num_time} temp={num_temp} />
            <WeatherItem src={cloudy} time={num_time} temp={num_temp} />
            <WeatherItem src={cloudy} time={num_time} temp={num_temp} />
            <WeatherItem src={cloudy} time={num_time} temp={num_temp} /> */}
            {
              FakeWeather.list.map((dt) => (
                <>
                for(let i=0; i;i++){}
                  <WeatherItem src={cloudy} time={dt.dt_txt} temp={dt.main.temp} />
                </>
              ))
            }

          </section>
        </main>

      </div>
    );
  }
}

export default App;

// let now_description = "great";
let num_from = 0, num_to = 0, num_hum = 0, num_pres = 0;

let num_time = "00:00";
let num_temp = 0;




// <Search handleInput={this.handleInputChange} />

