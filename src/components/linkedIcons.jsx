import React from "react";
import LinkedIcon from "./common/linkedIcon";
import { MdOutlineContactPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const LinkedIcons = () => {
  return (
    <div className="absolute right-0 bottom-0 flex flex-col bg-orange-400">
      <LinkedIcon icon={<AiFillGithub size="32" />} />
      <LinkedIcon icon={<AiFillLinkedin size="32" />} />
      <LinkedIcon icon={<MdOutlineContactPhone size="32" />} />
    </div>
  );
};

export default LinkedIcons;
