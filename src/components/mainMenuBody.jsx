import React, { Component } from "react";
import LinkedIcons from "./linkedIcons";
import MenuButtons from "./menuButtons";
import ContinueButton from "./common/continueButton";

class MainMenuBody extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    status: this.props.menuStatus,
  };
  setMenuStatus = (data) => {
    this.setState({ status: data });
  };
  render() {
    if (this.state.status === "visible") {
      return (
        <div className="flex bg-black w-screen h-screen items-center justify-center text-5xl ">
          <LinkedIcons />
          <MenuButtons />
        </div>
      );
    } else if (this.state.status === "not-visible") {
      return (
        <ContinueButton
          text="Click to see my portfolio"
          parentCallback={this.setMenuStatus}
        />
      );
    }
  }
}

export default MainMenuBody;
