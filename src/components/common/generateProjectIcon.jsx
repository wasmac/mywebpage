import React, { Component } from "react";
import plate from "../../Images/plate.png";
import GenerateImage from "../common/generateImage";
// import noIcon from "../../Images/null.png";
// import clickedIcon from "../../Images/clicked.png";

class GenerateProjectIcon extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    wasClicked: null,
  };
  render() {
    return (
      <div
        className="relative w-[97%] hover:bg-red-900 hover:cursor-pointer "
        onClick={this.handleClick}
      >
        <img
          className="absolute scale-[110%] left-[5%] "
          src={plate}
          alt={"image"}
        />
        <GenerateImage img={this.props.img} />
        <div className="absolute top-0 left-[0]">
          <GenerateImage img={this.props.icon} />
        </div>
      </div>
    );
  }
  handleClick() {
    const { id } = this.props;
    this.props.parentCallback(id);
  }
}

export default GenerateProjectIcon;
