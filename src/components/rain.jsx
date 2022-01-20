import React, { Component } from 'react';
import "../styles/Rain.scss"

//fix rain so it works again- the one without render was originall, create git repo cuz this is madness
//embed the rain into titleBar class, in app.js only call the <Component /> elements
//make sure that the reloadbar looks like it should, add the functionality that it works after click- not in the begining 
//clean the app.js 
//maybe rain can be function like in mosh thingie- when he creates tables


function rain(props) {
  const currentStatus = props;
  const pointsNr = 144;
  const filledArray = new Array(pointsNr);
  for (let i = 0; i < pointsNr; i++){
    filledArray[i] = <p key={i} className = {"c " + currentStatus}></p>;
  }
  return currentStatus === "running" ? filledArray : "";
}

export default rain;






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