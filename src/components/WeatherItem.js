import React, { Component } from "react";
import { render } from "react-dom";
import cloudy from "./img/weather-icons/mostlycloudy.svg";

export default class WeatherItem extends Component {
  render() {
    return (
      <section className="weather-now">
            <img className="weather-now-img" src={cloudy} width={400} height={300}/>
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
    )
  }
}



export class SayHello extends Component {
  render() {
    return (
      <section className="weather-week">
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60}></img>
              <span>8&deg; C</span>
            </div>
            <div>
              <time>03:00</time>
              <img src={cloudy} width={60} height={60} alt=""></img>
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
    );
  }
}
