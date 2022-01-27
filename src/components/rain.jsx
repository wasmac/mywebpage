import React, { Component } from "react";
import "../styles/Rain.scss";

//embed the rain into titleBar class, in app.js only call the <Component /> elements
//make sure that the reloadbar looks like it should, add the functionality that it works after click- not in the begining
//clean the app.js
//maybe rain can be function like in mosh thingie- when he creates tables

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
      filledArray[i] = <p key={i} className={"c " + currentStatus} key={i}></p>;
    }
    return currentStatus === "running" ? filledArray : "";
  };
}

export default Rain;

//  const Rain = props => {

//     const currentStatus = props.currentStatus;
//     const pointsNr = 144;
//     const filledArray = new Array(pointsNr);
//     for (let i = 0; i < pointsNr; i++){
//       filledArray[i] = <p key={i} className = {"c " + currentStatus} key= {i}></p>;
//     }
//     return filledArray;
// }

// export default Rain;

// class Rain extends React.Component {

//   constructor(status){
//     super();
//     this.currentStatus = status;
//   }

//   rainStatus() { //based on currentStatus return different arrays
//     console.log(this.currentStatus)
//     return this.currentStatus === "running" ? this.dots() : "";
//   }
//   dots = () =>{
//     const pointsNr = 144;
//     const filledArray = new Array(pointsNr);
//     for (let i = 0; i < pointsNr; i++){
//       filledArray[i] = <p key={i} className = {"c " + this.currentStatus}></p>;
//     }
//     return filledArray;
//   }
// }

// export default Rain;

// class Rain extends Component {
//   render() {
//     const {currentStatus} = this.props;
//     if (currentStatus !== "deleted") return <div>{this.toggleRain}</div>;
//   }
//   creatRain = () =>{
//     const pointsNr = 144;
//     const filledArray = new Array(pointsNr);
//     for (let i = 0; i < pointsNr; i++){
//       filledArray[i] = <p key={i} className = {"c " + this.currentStatus}></p>;
//     }
//       return filledArray;
//   }
//   toggleRain = () =>{
//     return this.props.currentStatus === "running" ? this.createRain() : "";
//   }
// }

// export default Rain;
