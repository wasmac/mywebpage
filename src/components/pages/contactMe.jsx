import React, { Component } from "react";
import GenerateImage from "../common/generateImage";
import GenerateTxt from "../common/generateTxt";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import LinkedIcon from "../common/linkedIcon";
import { Link } from "react-router-dom";
import SubMenuButton from "../common/subMenuButton";

class ContactMe extends Component {
  render() {
    return (
      <div className="relative w-screen h-screen bg-black">
        <div className="absolute left-[40%] top-[30%]">
          <GenerateImage img="https://i.kym-cdn.com/photos/images/newsfeed/000/607/920/72e.gif" />
        </div>
        <div className="absolute w-[22%] h-[20%] top-[60%] left-[38%] ">
          <GenerateTxt
            text="Email"
            position="top-[0] left-[0]"
            additionalClasses="font-bold"
          />
          <GenerateTxt
            text="maciejwaskiewicz97@gmail.com"
            position="top-[0] left-[20%]"
          />
          <GenerateTxt
            text="phone"
            position="top-[10%] left-[0]"
            additionalClasses="font-bold"
          />
          <GenerateTxt text="+31 634 174 879" position="top-[10%] left-[20%]" />
        </div>
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
        </div>
        <Link to={{ pathname: "/", state: { menuStatus: "visible" } }}>
          <SubMenuButton
            text="Back"
            position="top-[90%] left-[8%]"
            parentCallback={() => {
              return 0;
            }}
          />
        </Link>
      </div>
    );
  }
}

export default ContactMe;
