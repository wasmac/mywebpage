import React from "react";
import MennuButton from "./common/menuButton";
import { NavLink } from "react-router-dom";

const MenuButtons = () => {
  return (
    <div className="buttonText text-white text-center text-lg font-light relative top-1/4 flex justify-center content-center flex-col ">
      <NavLink to="/WorkExpierience">
        <MennuButton text="WORK EXPERIENCE" />
      </NavLink>
      <NavLink to="/Projects">
        <MennuButton text="PROJECTS" />
      </NavLink>
      <NavLink to="/AboutMe">
        <MennuButton text="ABOUT ME" />
      </NavLink>
      <NavLink to="/ContactMe">
        <MennuButton text="CONTACT ME!" />
      </NavLink>
      <NavLink to="/">
        <MennuButton text="QUIT" />
      </NavLink>
    </div>
  );
};

export default MenuButtons;
