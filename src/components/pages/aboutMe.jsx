import React, { Component } from "react";
import GenerateBackground from "../common/generateBackground";
import background from "../../Images/AboutMeBG.png";
import GenerateTxt from "./../common/generateTxt";
import myPicture from "../../Images/me.png";

class AboutMe extends Component {
  render() {
    let aboutMe =
      "I'm passionate about the latest technology whether that's software or hardware. I enjoy developing devices from scratch. With a highly diverse educational background I excel at collaborating with teams of different knowledge sets. As an engineer I found interest in Software development, blockchain and Hardware development.";
    return (
      <div>
        <GenerateBackground img={background} />
        <GenerateTxt
          text="About me"
          position="top-[9%] left-[14.5%]"
          additionalClasses="font-bold"
        />
        <GenerateTxt text="My stats" position="top-[12.5%] left-[14.5%]" />
        <GenerateTxt
          text="Maciej Waskiewicz"
          position="top-[20.5%] left-[17.5%]"
        />
        <div>
          <GenerateTxt text="Sex" position="top-[24.5%] left-[11.5%]" />
          <GenerateTxt text="Male" position="top-[24.5%] left-[25%]" />
          <GenerateTxt text="Class" position="top-[28.5%] left-[11.5%]" />
          <GenerateTxt text="Engineer" position="top-[29%] left-[24%]" />
          <GenerateTxt text="Gift" position="top-[32.5%] left-[11.5%]" />
          <GenerateTxt text="Keyboard" position="top-[33%] left-[23.9%]" />
          <GenerateTxt text="Physique" position="top-[36.5%] left-[11.5%]" />
          <GenerateTxt text="Slim" position="top-[37%] left-[25%]" />
        </div>
        <div>
          <GenerateTxt text="Face" position="top-[20.5%] left-[36.5%]" />
          <GenerateTxt text="Commoner" position="top-[20.5%] left-[49.5%]" />
          <GenerateTxt text="Hair" position="top-[24.5%] left-[36.5%]" />
          <GenerateTxt text="Wave" position="top-[24.5%] left-[51%]" />
          <GenerateTxt text="Color" position="top-[29%] left-[36.5%]" />
          <GenerateTxt text="Black" position="top-[29%] left-[50.8%]" />
        </div>
        <div>
          <GenerateTxt text="Level" position="top-[44.2%] left-[13.5%]" />
          <GenerateTxt text="Vitality" position="top-[48.2%] left-[13.5%]" />
          <GenerateTxt text="Attunement" position="top-[52%] left-[13.5%]" />
          <GenerateTxt text="Endurance" position="top-[56%] left-[13.5%]" />
          <GenerateTxt text="Strength" position="top-[60%] left-[13.5%]" />
          <GenerateTxt text="Dexterity" position="top-[63.8%] left-[13.5%]" />
          <GenerateTxt text="Resistance" position="top-[67.8%] left-[13.5%]" />
          <GenerateTxt
            text="Intelligence"
            position="top-[71.8%] left-[13.5%]"
          />
          <GenerateTxt text="Faith" position="top-[75.8%] left-[13.5%]" />
          <GenerateTxt text="Humanity" position="top-[80.8%] left-[13.5%]" />
        </div>
        <div>
          <GenerateTxt text="24" position="top-[44.2%] left-[29%]" />
          <GenerateTxt text="20" position="top-[48.2%] left-[29%]" />
          <GenerateTxt text="50" position="top-[52%] left-[29%]" />
          <GenerateTxt text="10" position="top-[56%] left-[29%]" />
          <GenerateTxt text="20" position="top-[60%] left-[29%]" />
          <GenerateTxt text="50" position="top-[63.8%] left-[29%]" />
          <GenerateTxt text="99" position="top-[67.8%] left-[29%]" />
          <GenerateTxt text="99" position="top-[71.8%] left-[29%]" />
          <GenerateTxt text="99" position="top-[75.8%] left-[29%]" />
          <GenerateTxt text="1" position="top-[80.8%] left-[29%]" />
        </div>
        <div className="w-[20%] h-[35%]  absolute left-[40%] top-[48%]">
          <GenerateTxt text={aboutMe} position="top-[0%] left-[0%]" />
        </div>
        <div className="w-[25%] h-[55%] absolute left-[67%] top-[25%] ">
          <GenerateBackground img={myPicture} />
        </div>
      </div>
    );
  }
}

export default AboutMe;
