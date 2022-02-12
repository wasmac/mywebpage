import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import bgPicture from "../../Images/WorkExperienceBG.png";
import SubMenuButton from "../common/subMenuButton";
import GenerateBackground from "../common/generateBackground";
import GenerateTxt from "../common/generateTxt";
import cisco from "../../Images/cisco.HEIC";
import sql from "../../Images/sql.HEIC";
import cloud from "../../Images/cloud.pdf";

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    jobsButtons: null,
    jobsButtonsText: null,
    certificatesButtons: null,
    status: null,
    wasClicked: null,
  };
  setCertificateBlank = (data) => {
    switch (data) {
      case "Certificates_S":
        console.log(data);
        window.open(sql, "_blank");
        break;
      case "Certificates_Cis":
        console.log(data);
        window.open(cisco, "_blank");
        break;
      case "Certificates_Cloud":
        console.log(data);
        window.open(cloud, "_blank");
        break;
      default:
    }
  };
  setButtonStatus = (data) => {
    const { wasClicked } = this.state;
    switch (data) {
      case "Jobs_I":
        if (wasClicked != "Jobs_I") {
          this.setState({ wasClicked: data });
          this.setState({
            jobsButtonsText: (
              <Fragment>
                <GenerateTxt
                  text="Job Desription: "
                  position="top-[28%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="Intern Economic Developement Analyst"
                  position="top-[28%] left-[55%]"
                />
                <GenerateTxt
                  text="Company | Time: "
                  position="top-[32%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="CELSA Huta Ostrowiec | August 2019-September 2019"
                  position="top-[32%] left-[55%]"
                />
                <GenerateTxt
                  text="Responsibilities: "
                  position="top-[36.5%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="-Preparation of reports in Excel"
                  position="top-[36.5%] left-[55%]"
                />
                <GenerateTxt
                  text="-Code review"
                  position="top-[41%] left-[55%]"
                />
              </Fragment>
            ),
          });
        } else if (wasClicked === "Jobs_I") {
          this.setState({ wasClicked: null });
          this.setState({ jobsButtonsText: null });
        }
        break;
      case "Jobs_RT":
        if (wasClicked != "Jobs_RT") {
          this.setState({ wasClicked: data });
          this.setState({
            jobsButtonsText: (
              <Fragment>
                <GenerateTxt
                  text="Job Desription: "
                  position="top-[28%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="Repair Technician"
                  position="top-[28%] left-[55%]"
                />
                <GenerateTxt
                  text="Company | Time: "
                  position="top-[32%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="GoScooter | September 2019-October 2019"
                  position="top-[32%] left-[55%]"
                />
                <GenerateTxt
                  text="Responsibilities: "
                  position="top-[36.5%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="-Electronics repair"
                  position="top-[36.5%] left-[55%]"
                />
                <GenerateTxt
                  text="-Parts ordering"
                  position="top-[41%] left-[55%]"
                />
              </Fragment>
            ),
          });
        } else if (wasClicked === "Jobs_RT") {
          this.setState({ wasClicked: null });
          this.setState({ jobsButtonsText: null });
        }
        break;
      case "Jobs_T":
        if (wasClicked != "Jobs_T") {
          this.setState({ wasClicked: data });
          this.setState({
            jobsButtonsText: (
              <Fragment>
                <GenerateTxt
                  text="Job Desription: "
                  position="top-[28%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="Robotics Teacher"
                  position="top-[28%] left-[55%]"
                />
                <GenerateTxt
                  text="Company | Time: "
                  position="top-[32%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="RoboCode | December 2019-February 2020"
                  position="top-[32%] left-[55%]"
                />
                <GenerateTxt
                  text="Responsibilities: "
                  position="top-[36.5%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="-Providing lessons for students"
                  position="top-[36.5%] left-[55%]"
                />
                <GenerateTxt
                  text="-Ensuring that standards of good laboratory practices"
                  position="top-[41%] left-[55%]"
                />
                <GenerateTxt text="are met" position="top-[45%] left-[55%]" />
                <GenerateTxt
                  text="-Improvement of classes materials"
                  position="top-[49%] left-[55%]"
                />
              </Fragment>
            ),
          });
        } else if (wasClicked === "Jobs_T") {
          this.setState({ wasClicked: null });
          this.setState({ jobsButtonsText: null });
        }
        break;
      case "Jobs_PL":
        if (wasClicked != "Jobs_PL") {
          this.setState({ wasClicked: data });
          this.setState({
            jobsButtonsText: (
              <Fragment>
                <GenerateTxt
                  text="Job Desription: "
                  position="top-[28%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="Mechanical project leader/ Electronics Engineer"
                  position="top-[28%] left-[55%]"
                />
                <GenerateTxt
                  text="Company | Time: "
                  position="top-[32%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="Mayht | June 2020- Present"
                  position="top-[32%] left-[55%]"
                />
                <GenerateTxt
                  text="Responsibilities: "
                  position="top-[36.5%] left-[45%]"
                  additionalClasses="font-bold"
                />
                <GenerateTxt
                  text="-Project & Team Management"
                  position="top-[36.5%] left-[55%]"
                />
                <GenerateTxt
                  text="-CAD design in Onshape"
                  position="top-[41%] left-[55%]"
                />
                <GenerateTxt
                  text="-Adhesive/ Speaker Parts Sourcing"
                  position="top-[45%] left-[55%]"
                />
                <GenerateTxt
                  text="-Quality Control process setup/ automation"
                  position="top-[49%] left-[55%]"
                />
                <GenerateTxt
                  text="-PCB design"
                  position="top-[53.5%] left-[55%]"
                />
                <GenerateTxt
                  text="-Bluetooth amplifier electronics design"
                  position="top-[57.5%] left-[55%]"
                />
                <GenerateTxt
                  text="-C/ C++ software development for STM32"
                  position="top-[62%] left-[55%]"
                />
                <GenerateTxt
                  text="-DSP software development on ADAU in SigmaStudio"
                  position="top-[66%] left-[55%]"
                />
                <GenerateTxt
                  text="-Full Speaker builds"
                  position="top-[70%] left-[55%]"
                />
                <GenerateTxt
                  text="-Training of newcomers"
                  position="top-[74.5%] left-[55%]"
                />
                <GenerateTxt
                  text="-Audio/ Power related Measurements"
                  position="top-[79%] left-[55%]"
                />
              </Fragment>
            ),
          });
        } else if (wasClicked === "Jobs_PL") {
          this.setState({ wasClicked: null });
          this.setState({ jobsButtonsText: null });
        }
        break;
      default:
    }
  };
  setMenuStatus = (data) => {
    const { wasClicked } = this.state;
    switch (data) {
      case "Jobs":
        if (wasClicked != "Jobs") {
          this.setState({ wasClicked: data });
          this.setState({ certificatesButtons: null });
          this.setState({ jobsButtonsText: null });
          this.setState({
            jobsButtons: (
              <Fragment>
                <SubMenuButton
                  text="Intern"
                  id="Jobs_I"
                  position="top-[28%] left-[35%]"
                  parentCallback={this.setButtonStatus}
                />
                <SubMenuButton
                  text="Repair Technican"
                  id="Jobs_RT"
                  position="top-[32%] left-[35%]"
                  parentCallback={this.setButtonStatus}
                />
                <SubMenuButton
                  text="Teacher"
                  id="Jobs_T"
                  position="top-[36.5%] left-[35%]"
                  parentCallback={this.setButtonStatus}
                />
                <SubMenuButton
                  text="Project Lead"
                  id="Jobs_PL"
                  position="top-[40.5%] left-[35%]"
                  parentCallback={this.setButtonStatus}
                />
              </Fragment>
            ),
          });
        } else if (wasClicked === "Jobs") {
          this.setState({ wasClicked: null });
          this.setState({ jobsButtons: null });
          this.setState({ certificatesButtons: null });
          this.setState({ jobsButtonsText: null });
        }
        break;
      case "Certificates":
        if (wasClicked != "Certificates") {
          this.setState({ wasClicked: data });
          this.setState({ jobsButtons: null });
          this.setState({ jobsButtonsText: null });
          this.setState({
            certificatesButtons: (
              <Fragment>
                <SubMenuButton
                  text="SQL"
                  id="Certificates_S"
                  position="top-[49%] left-[35%]"
                  parentCallback={this.setCertificateBlank}
                />
                <SubMenuButton
                  text="CISCO"
                  id="Certificates_Cis"
                  position="top-[53.5%] left-[35%]"
                  parentCallback={this.setCertificateBlank}
                />
                <SubMenuButton
                  text="Clouding"
                  id="Certificates_Cloud"
                  position="top-[58%] left-[35%]"
                  parentCallback={this.setCertificateBlank}
                />
              </Fragment>
            ),
          });
        } else if (wasClicked === "Certificates") {
          this.setState({ wasClicked: null });
          this.setState({ certificatesButtons: null });
          this.setState({ jobsButtons: null });
          this.setState({ jobsButtonsText: null });
        }
        break;
      default:
    }
  };
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
          text="Please check my background"
          position="top-[17%] left-[14%]"
        />
        <SubMenuButton
          text="Jobs"
          id="Jobs"
          position="top-[28%] left-[20%]"
          parentCallback={this.setMenuStatus}
        />
        <SubMenuButton
          text="Certificates"
          id="Certificates"
          position="top-[49%] left-[20%]"
          parentCallback={this.setMenuStatus}
        />
        <NavLink to="/">
          <SubMenuButton
            text="Back"
            position="top-[85%] left-[8%]"
            parentCallback={() => {
              return 0;
            }}
          />
        </NavLink>
        {this.state.jobsButtons}
        {this.state.certificatesButtons}
        {this.state.jobsButtonsText}
      </div>
    );
  }
}

export default WorkExperience;
