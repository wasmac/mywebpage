import React from "react";

//An icon with social media links
//create an icon which holds "link", "text" and "icon" parameters
//on hover create a square from circle and show tooltip with Text

const LinkedIcon = ({ icon }) => {
  return <div className="sidebar-icon bg-slate-900">{icon}</div>;
};

export default LinkedIcon;

// return <strong className="flex">Click Me!</strong>;
