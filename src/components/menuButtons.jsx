import React from "react";
import MennuButton from "./common/menuButton";
import { Link } from "react-router-dom";

const MenuButtons = () => {
  return (
    <div className="buttonText text-lg font-light  bottom-[15%] flex justify-center content-center flex-col ">
      <Link to="/WorkExpierience">
        <MennuButton text="WORK EXPERIENCE" />
      </Link>
      <Link to="/Projects">
        <MennuButton text="PROJECTS" />
      </Link>
      <Link to="/AboutMe">
        <MennuButton text="ABOUT ME" />
      </Link>
      <Link to="/ContactMe">
        <MennuButton text="CONTACT ME!" />
      </Link>
      <a href="/">
        <MennuButton text="QUIT" />
      </a>
    </div>
  );
};

export default MenuButtons;
