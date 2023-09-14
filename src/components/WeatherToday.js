import React from "react";

// import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/mostlycloudy.svg";

class WeatherNow extends React.Component {
  state = {
    input: ""
  };


  render() {
    return (
      <>
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



      </>
    );
  }


}

export default WeatherNow;