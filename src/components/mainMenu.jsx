import React, { Component } from "react";
import MainMenuBody from "./mainMenuBody";
import TitleText from "./common/titleText";
let userClickCounter = 0;

class MainMenu extends Component {
  componentDidMount() {
    userClickCounter++;
  }
  render() {
    return (
      <div className="w-screen h-screen bg-black">
        <TitleText title="Maciej Waskiewicz" />
        <MainMenuBody
          menuStatus={userClickCounter > 0 ? "visible" : "not-visible"}
        />
      </div>
    );
  }
}

export default MainMenu;

{
  /* <ReloadBar animationName="reloadbar" parentCallback={this.setRain} /> */
}
