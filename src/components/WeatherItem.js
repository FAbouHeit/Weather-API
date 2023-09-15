import React, { Component } from "react";
import { render } from "react-dom";
import FakeWeather from "../data/FakeWeather.json";

import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";



class WeatherItem extends React.Component{
  state = {
    input: "",
    src: "",
    time: " "
  };




render(){
  return(
    
  <>
  
              {
                FakeWeather.list.map((a)=>{
                  // let myHours = a.dt_txt.split(" ");
                  let mysrc = a.weather[0].main;
                  let myActualSrc= "";

                  switch(mysrc){
                    case "Clear": myActualSrc = clear;
                    break;
                    case "Clouds": myActualSrc = cloudy;
                    break;
                    case "Drizzle": myActualSrc = drizzle;
                    break;
                    case "Fog": myActualSrc = fog;
                    break;
                    case "Mostly Cloudy": myActualSrc = mostlycloudy;
                    break;
                    case "Partly Cloudy": myActualSrc = partlycloudy;
                    break;
                    case "Rain": myActualSrc = rain;
                    break;
                    case "Snow": myActualSrc = snow;
                    break;
                    case "Storm": myActualSrc = storm;
                    break;
                    case "Unknown": myActualSrc = unknown;
                    break;
                    default: myActualSrc = unknown;
                  }
                  return(
                    <div>
                      <div>{mysrc}</div>
                    <time>{a.dt_txt.time}</time>
                    <img width={60} height={60} src={myActualSrc} alt={mysrc}></img>
                    <span>{this.props.temp}&deg; C</span>
                    </div>
                  )
                })}
  
  </>
)
              }
            
            }

export default WeatherItem