import React from "react";
import LinkedIcon from "./common/linkedIcon";
import { MdOutlineContactPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const LinkedIcons = () => {
  return (
    <div className="absolute right-0 bottom-0 flex flex-col">
      <a
        rel="noopener noreferrer"
        href="https://github.com/wasmac"
        target="_blank"
      >
        <LinkedIcon text="Check my Git" icon={<AiFillGithub size="32" />} />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/maciej-wa%C5%9Bkiewicz-b13431189/"
        target="_blank"
      >
        <LinkedIcon
          text="Check my LinkedIn"
          icon={<AiFillLinkedin size="32" />}
        />
      </a>

      <Link to="/ContactMe">
        <LinkedIcon
          text="Contat me"
          icon={<MdOutlineContactPhone size="32" />}
        />
      </Link>
    </div>
  );
};

export default LinkedIcons;
