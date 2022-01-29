import React, { Component } from "react";
import NavBar from "./common/navBar";
import PictureSlider from "./common/pictureSlider";
import MainMenuBody from "./mainMenuBody";

class MainMenu extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PictureSlider />
        <MainMenuBody />
      </div>
    );
  }
}

export default MainMenu;
