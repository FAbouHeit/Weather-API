import React, { Component } from "react";
import { render } from "react-dom";

// export default class WeatherItem extends Component {
//   render() {
//     return <div>Heello</div>;
//   }
// }
// export class SayHello extends Component {
//   render() {
//     return (
//       <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }



class WeatherItem extends React.Component{
  state = {
    input: "",
    src: "",
    time: ""
  };


  render() {
    return (
      <>

            <div>
              <time>{this.props.time}</time>
              <img width={60} height={60} src={this.props.src}></img>
              <span>{this.props.temp}&deg; C</span>
            </div>

      </>
    );
  }


}

export default WeatherItem