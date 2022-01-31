import React from "react";

//each button navigates to different object
//it takes "text" "component_name" and privdies "/ + component name form function"

const MennuButton = ({ text }) => {
  return <strong className="p-2">{text}</strong>;
};

export default MennuButton;
