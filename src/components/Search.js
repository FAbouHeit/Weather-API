import React, { useState } from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";

const Search = (props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    props.handleInput(input);
  };

  return (
    <div>
      {input}
      <input type="text" id="input-name" onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Say Hello</button>
    </div>
  );
};

export default Search;
