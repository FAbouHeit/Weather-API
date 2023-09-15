import React from "react";

// import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/mostlycloudy.svg";
import FakeWeather from "../data/FakeWeather.json";

class WeatherNow extends React.Component {
  state = {
    input: ""
  };


  render() {

    
    return (
      <>
        <img src={this.props.src} width={500} height={400}></img>
        <span className="weather-now-dis">{this.props.desc}</span>
        <div className="weather-now-bottom">
            <div className="weather-temp">
                <span><strong>Temperature</strong></span><span> {this.props.tempFrom}&deg; to {this.props.tempTo}&deg; C</span>
            </div>
            <div className="weather-hum-pre">
                <span><strong>Humidity</strong></span> <span>{this.props.humidity}%</span> <span><strong>Pressure</strong></span> <span>{this.props.pressure}</span>
            </div>
        </div>



      </>
    );
  }


}

export default WeatherNow;