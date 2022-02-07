import React, { Component } from "react";
import bgPicture from "../../Images/WorkExperienceBG.png";
import SubMenuButton from "../common/subMenuButton";
import GenerateBackground from "../common/generateBackground";
import GenerateTxt from "../common/generateTxt";

// function WorkExpierience() {
//   return (
//     <div className="relative flex w-screen h-screen ">
//       <img
//         className="absolute h-screen w-screen"
//         src={bgPicture}
//         alt={"backGround"}
//       />
// <SubMenuName
// text="Work experience"
// position="top-[13%] left-[14%]"
// additionalClasses="font-bold"
//       />
//       <SubMenuName
// text="Please check my background"
// position="top-[17%] left-[14%]"
//       />
//       <SubMenuButton text="Jobs" position="top-[28%] left-[20%]" />
//       <SubMenuButton text="Certificates" position="top-[49%] left-[20%]" />
//     </div>
//   );
// }

// export default WorkExpierience;

//style={bgPicture}
//<div className="fixed bottom-24 left-20  w-1/4 h-1/4 brightness-50">

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <GenerateBackground img={bgPicture} />
        <GenerateTxt
          text="Work experience"
          position="top-[13%] left-[14%]"
          additionalClasses="font-bold"
        />
        <GenerateTxt
          xt="Please check my background"
          position="top-[17%] left-[14%]"
        />
        <SubMenuButton text="Jobs" position="top-[28%] left-[20%]" />
        <SubMenuButton text="Certificates" position="top-[49%] left-[20%]" />
        {/* {conditionallyRenderStuffForEachButton} */}
      </div>
    );
  }
}

export default WorkExperience;
