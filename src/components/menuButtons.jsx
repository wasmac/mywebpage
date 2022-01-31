import React from "react";
import MennuButton from "./common/menuButton";
import { NavLink } from "react-router-dom";

const MenuButtons = () => {
  return (
    <div className="relative -top-1/4 flex bg-violet-600 justify-center content-center flex-col text-center">
      <NavLink to="/WorkExpierience">
        <MennuButton text="Work Experience" />
      </NavLink>
      <NavLink to="/Projects">
        <MennuButton text="Projects" />
      </NavLink>
      <NavLink to="/AboutMe">
        <MennuButton text="About me" />
      </NavLink>
      <NavLink to="/ContactMe">
        <MennuButton text="Contact Me!" />
      </NavLink>
    </div>
  );
};

export default MenuButtons;
