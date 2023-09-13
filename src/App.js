import React, { Component } from "react";
// import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

import cloudy from "./img/weather-icons/mostlycloudy.svg";

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
            <img src={cloudy} width={500} height={400}></img>
            <span className="weather-now-dis">overcast clouds</span>
            <div className="weather-now-bottom">
              <div className="weather-temp">
                <span><strong>Temperature</strong></span><span> 10&deg; to 11&deg; C</span>
              </div>
              <div className="weather-hum-pre">
                <span><strong>Humidity</strong></span> <span>78%</span> <span><strong>Pressure</strong></span> <span>1008.48</span>
              </div>
            </div>
          </section>
          <section className="weather-week">
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            
        </section>
        </main>
        
      </div>
    );
  }
}

export default App;


// <Search handleInput={this.handleInputChange} />

