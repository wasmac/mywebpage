import React, { Component } from "react";
import MainMenuBody from "./mainMenuBody";
import TitleText from "./common/titleText";
import Bonfire from "./common/bonfireGif";

class MainMenu extends Component {
  render() {
    return (
      <div className="w-screen h-screen bg-black">
        <Bonfire />
        <TitleText title="Maciej Waskiewicz" />
        <MainMenuBody />
      </div>
    );
  }
}

export default MainMenu;

{
  /* <ReloadBar animationName="reloadbar" parentCallback={this.setRain} /> */
}
