import React from "react";

//An icon with social media links
//create an icon which holds "link", "text" and "icon" parameters
//on hover create a square from circle and show tooltip with Text

const LinkedIcon = ({ icon, text = "tooltip" }) => {
  return (
    <div className="sidebar-icon bg-slate-900 group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default LinkedIcon;

// return <strong className="flex">Click Me!</strong>;
