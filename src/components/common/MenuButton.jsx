import React from "react";

//each button navigates to different object
//it takes "text" "component_name" and privdies "/ + component name form function"

const MennuButton = ({ text }) => {
  return (
    <strong className="flex py-[2%] hover:bg-red-900 justify-center text-center">
      {text}
    </strong>
  );
};

export default MennuButton;
