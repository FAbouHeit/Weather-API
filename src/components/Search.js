import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <header>
          <form>
          <input type="text" placeholder="Type in a city name"></input>
           <button>FIND WEATHER</button>
           </form>
        </header>
    );
  }
}
export default Search;
