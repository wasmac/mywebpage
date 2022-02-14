import React from "react";

//each button navigates to different object
//it takes "text" "component_name" and privdies "/ + component name form function"

const SubMenuName = ({ text, position, ...rest }) => {
  const options = Object.values({ ...rest });
  const classNames =
    "subMenuTxt  text-white text-center te font-light uppercase absolute " +
    position +
    " " +
    options;
  return <p className={classNames}>{text}</p>;
};

export default SubMenuName;

//top-[4.7%] left-[10.3%]
