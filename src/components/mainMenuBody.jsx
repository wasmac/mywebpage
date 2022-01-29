import React, { Component } from "react";
import LinkedIcons from "./linkedIcons";
import MenuButtons from "./menuButtons";

class MainMenuBody extends Component {
  render() {
    return (
      <div className="flex bg-slate-500 w-screen h-screen text-white items-center justify-center text-5xl">
        <LinkedIcons />
        <MenuButtons />
      </div>
    );
  }
}

export default MainMenuBody;
