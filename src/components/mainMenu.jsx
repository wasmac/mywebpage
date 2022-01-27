import React, { Component } from "react";
import MenuButton from "./common/continueButton";

class MainMenu extends Component {
  render() {
    return (
      <div>
        <MenuButton text="Click" />
        <MenuButton text="Click" />
        <MenuButton text="Click" />
      </div>
    );
  }
}

export default MainMenu;
