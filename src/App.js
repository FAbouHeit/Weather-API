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

            <WeatherNow />
          </section>
          <section className="weather-week">

            <WeatherItem src={cloudy} timesss={"04:00"} temp={8}/>
            <WeatherItem src={cloudy}/>
            <WeatherItem src={rain}/>
            <WeatherItem src={cloudy}/>
            <WeatherItem src={cloudy}/>
            <WeatherItem src={cloudy}/>
            <WeatherItem src={cloudy}/>
            
        </section>
        </main>
        
      </div>
    );
  }
}

export default App;


// <Search handleInput={this.handleInputChange} />

