import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" top-0 left-0 h-8 w-screen m-0 flex bg-slate-50">
      <NavLink to="/">
        <strong className="absolute p-2 text-black top-0 right-0">Quit</strong>
      </NavLink>
    </div>
  );
};

export default NavBar;

//
