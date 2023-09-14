import React, { Component } from "react";
import Search from "./components/Search";
import {WeatherItem , SayHello} from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

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

        <Search/>

        <main>

          <WeatherItem/>

          <SayHello/>
        </main>
        
      </div>
    );
  }
}

export default App;


// <Search handleInput={this.handleInputChange} />

