import React, { Component } from "react";
import plate from "../../Images/plate.png";

class GenerateProjectIcon extends Component {
  render() {
    return (
      //   <div className="relative">
      //     <img className="absolute " src={plate} alt={"backGround"} />

      //     <img className="absolute " src={this.props.img} alt={"backGround"} />
      //   </div>
      <div className={`"relative w-full h-full " `}>
        <img className="absolute " src={plate} alt={"image"} />
        <img className="absolute " src={this.props.img} alt={"image"} />
      </div>
    );
  }
}

export default GenerateProjectIcon;
