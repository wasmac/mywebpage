import React, { Component } from "react";
import "../../App.css";

class TitleText extends Component {
  render() {
    return <h2 className="mainText">{this.props.title}</h2>;
  }
}

export default TitleText;
