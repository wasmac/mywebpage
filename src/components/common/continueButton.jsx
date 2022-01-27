import React, { Component } from "react";
import "../../App.css";

class ContinueButton extends Component {
  render() {
    return <button className="subText ">{this.props.text}</button>;
  }
}

export default ContinueButton;
