import React from "react";
import MennuButton from "./common/menuButton";

const MenuButtons = () => {
  return (
    <div className="relative -top-1/4 flex bg-violet-600 justify-center content-center flex-col">
      <MennuButton />
      <MennuButton />
      <MennuButton />
      <MennuButton />
    </div>
  );
};

export default MenuButtons;
