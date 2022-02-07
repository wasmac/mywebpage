import React, { useState } from "react";
import SubMenuName from "./subMenuName";

//each button navigates to different object
//it takes "text" "component_name" and privdies "/ + component name form function"

function SubMenuButton({ text, position, ...rest }) {
  const [jobsButtons, setJobsButtons] = useState(null);
  const [isInsideButton, setIsInsideButton] = useState("no");
  const options = Object.values({ ...rest });
  const classNames = position + " " + options;

  function handleClick() {
    if (jobsButtons != null && isInsideButton === "no") setJobsButtons(null);
    if (jobsButtons === null && isInsideButton === "no") {
      setIsInsideButton("yes");
      setJobsButtons(
        <div>
          <SubMenuButton text="Intern" position="top-[28%] left-[35%]" />
          <SubMenuButton
            text="Repair Technican"
            position="top-[32%] left-[35%]"
          />
          <SubMenuButton text="Teacher" position="top-[36.5%] left-[35%]" />
          <SubMenuButton
            text="Project Lead"
            position="top-[40.5%] left-[35%]"
          />
        </div>
      );
    }
    if (jobsButtons != null && isInsideButton === "yes") {
      setJobsButtons(
        <SubMenuName text="Sjema" position="top-[23%] left-[50%]" />
      );
    }
    console.log(isInsideButton);
  }
  return (
    <div>
      <div
        className={`" subMenuTxt text-white font-light
                    uppercase absolute flex px-0.5 hover:bg-red-900
                    cursor-default w-1/12 " ${classNames} `}
      >
        <button onClick={handleClick}>{text}</button>
      </div>
      <div>{jobsButtons}</div>
    </div>
  );
}

export default SubMenuButton;

//top-[4.7%] left-[10.3%]
