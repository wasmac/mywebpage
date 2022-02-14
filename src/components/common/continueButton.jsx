import React, { Component } from "react";
import "../../App.css";

class ContinueButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <button
        className="subText bottom-[30%] left-[42%]"
        onClick={this.handleClick}
      >
        {this.props.text}
      </button>
    );
  }
  handleClick() {
    this.props.parentCallback("visible");
  }
}

export default ContinueButton;
