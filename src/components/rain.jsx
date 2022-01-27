import React, { Component } from "react";
import "../styles/Rain.scss";

//this class is updated via props

class Rain extends Component {
  state = {
    pointsNr: 144,
    filledArray: new Array(this.pointsNr),
  };
  render() {
    return <div>{this.createRain()}</div>;
  }
  createRain = () => {
    const { currentStatus } = this.props;
    const { pointsNr, filledArray } = this.state;
    for (let i = 0; i < pointsNr; i++) {
      filledArray[i] = <p key={i} className={"c " + currentStatus}></p>;
    }
    return currentStatus === "running" ? filledArray : "";
  };
}

export default Rain;
