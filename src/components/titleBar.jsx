import React, { Component } from "react";
import "../App.css";
import "../styles/Reloadbar.css";
import TitleText from "./common/titleText";
import ContinueButton from "./common/continueButton";
import { NavLink } from "react-router-dom";

class TitleBar extends Component {
  render() {
    return (
      <div className="h-screen w-screen bg-black">
        <TitleText title="Maciej Waskiewicz" />
        <NavLink to="/mainMenu">
          <ContinueButton text="Click to see my portfolio" />
        </NavLink>
      </div>
    );
  }
}

export default TitleBar;
