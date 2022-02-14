import React, { Component } from "react";
import GenerateBackground from "./../common/generateBackground";
import background from "../../Images/ProjectsBG.png";
import GenerateTxt from "./../common/generateTxt";
// import GenerateImage from "../common/generateImage";
// import pcb from "../../Images/pcb.png";

import pcb2 from "../../Images/circuit-icon.png";
import GenerateProjectIcon from "./../common/generateProjectIcon";

class Projects extends Component {
  render() {
    return (
      <div className="relative">
        <GenerateBackground img={background} />
        <GenerateTxt
          text="Projects"
          position="top-[9%] left-[14.5%]"
          additionalClasses="font-bold"
        />
        <GenerateTxt
          text="Projets overview"
          position="top-[13.3%] left-[14.5%]"
        />
        <div className="absolute left-[8%] top-[21.5%] w-[7%] h-[63.5%]  overflow-auto scrollbar Flipped">
          <div className="flex justify-center content-center flex-col item_direction">
            <GenerateProjectIcon img={pcb2} />
            <GenerateProjectIcon img={pcb2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
