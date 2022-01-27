import React, { Component } from "react";
import "../../App.css";

class MenuButton extends Component {
  render() {
    return <button className="subText ">{this.props.text}</button>;
  }
}

export default MenuButton;
