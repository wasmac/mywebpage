import React, { Component } from "react";
import GenerateBackground from "./../common/generateBackground";
import GenerateTxt from "./../common/generateTxt";
import GenerateProjectIcon from "./../common/generateProjectIcon";
import background from "../../Images/ProjectsBG.png";
import pcb from "../../Images/pcb.png";
import pcb1 from "../../Images/pcb1.png";
import pcb2 from "../../Images/pcb2.png";
import pcb3 from "../../Images/pcb3.png";
import drone1 from "../../Images/drone1.jpg";
import drone2 from "../../Images/drone2.png";
import drone3 from "../../Images/drone3.png";
import drone4 from "../../Images/drone4.png";
import dsp1 from "../../Images/dsp1.png";
import dsp2 from "../../Images/dsp2.png";
import dsp3 from "../../Images/dsp3.png";
import noimage from "../../Images/noimage.png";
import storein1 from "../../Images/storein1.png";
import storein2 from "../../Images/storein2.png";
import storein3 from "../../Images/storein3.png";
import sensorboard1 from "../../Images/sensorboard1.png";
import speaker from "../../Images/speaker.png";
import driver from "../../Images/driver.png";
import drone from "../../Images/drone.png";
import dsp from "../../Images/dsp.png";
import mayhtierMini from "../../Images/mayhtierMini.png";
import storeIn from "../../Images/storeIn.png";
import sensorBoard from "../../Images/sensorBoard.png";
import xbox360 from "../../Images/xbox360.png";
import noIcon from "../../Images/null.png";
import clickedIcon from "../../Images/clicked.png";
import GenerateImage from "../common/generateImage";
import { Link } from "react-router-dom";
import SubMenuButton from "../common/subMenuButton";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    currentId: null,
    name: null,
    name_des: null,
    tech: null,
    intr: null,
    des: null,
    pics: null,
  };
  clearState = () => {
    this.setState({ currentId: null });
    this.setState({ name: null });
    this.setState({ name_des: null });
    this.setState({ tech: null });
    this.setState({ intr: null });
    this.setState({ des: null });
    this.setState({ pics: null });
  };
  handleClick = (data) => {
    const { currentId } = this.state;
    switch (data) {
      case "pcb": // cos glupiego
        if (currentId != "pcb") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({ name: "Vintage Electronic Camera (VEC)" });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Hardware design:</b> EasyEda & KiCad{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Software language:</b> C++{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> Platformio,
                ESP32, WiFi
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                Digital Camera Board that connects to your Google Photos through
                google Api and WiFi EPS32 board capabilities. After succesfull
                upload pictures from camera are getting deleted, so the SD card
                should never get full.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                The project was designed with the vintage feel of camera in
                mind. It does not posses the lcd screen, so you can only see the
                picture after it is uploded to the disk. It removes the need for
                and expensive sd cards since all the pictures are deleted after
                the upload procedure. The design of the board was made in KiCad-
                initially the project was started in EasyEda, then due to 3D
                model capabilities and some additional perks it was migrated to
                to KiCad. Design is based on the Camera Board: ESP32-cam.
                Additionaly the battery charging system was added. Software is
                being written in C++ based on the &quot;Take photo and save it
                to micro SD&ldquo; project from randomnerdturotials.com In
                current stage of the project I am reviewing the Electronics-
                already ordered boards, the board functions properly besides the
                camera communication. I am currently looking into that problem.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div>
                <GenerateImage img={pcb1} />
                <GenerateImage img={pcb2} />
                <GenerateImage img={pcb3} />
              </div>
            ),
          });
        } else if (currentId === "pcb") {
          this.clearState();
        }
        break;
      case "speaker":
        if (currentId != "speaker") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({
            name: "Development and mass production of the Speaker Driver",
          });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Hardware design:</b> Onshape.com{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> CAD, Injection
                Moulding
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                Project from my current full time job. It is one of 3 most
                important projects in the company. I lead the team of 3 peopele
                import SubMenuButton from &apos./../common/subMenuButton&apos;
                (myself included) in CAD design and manufacturing procedures.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                Project was initially started by different engineer, afterwards
                then it was transfered to me. I have updated all the CAD
                drawings, designed the tooling for assembly and defined the mass
                manufacturing plan for that driver. I am enforcing the planning
                thorugh work with external companies.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div className="flex flex-col space-y-4">
                <GenerateImage img={driver} />
                <iframe
                  className="w-full aspect-video"
                  src="https://assets.website-files.com/6007f53a4f491002dd93b886/609bbfe6db91b91535b4b385_2%20rattle%20loop-transcode.mp4"
                />
                <iframe
                  className="w-full aspect-video"
                  src="https://assets.website-files.com/6007f53a4f491002dd93b886/609bc040a0053e91bf01cfef_5%20weight%20comparison-transcode.mp4
                  "
                />
              </div>
            ),
          });
        } else if (currentId === "speaker") {
          this.clearState();
        }
        break;
      case "drone":
        if (currentId != "drone") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({
            name: "Design and programming of Real Time Operating Drone",
          });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Hardware design:</b> EasyEda{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Software language:</b> Arduino & Cpp{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> ESP32, Arduino
                IDE, RTOS, WiFi
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                The aim of this research was to design, build and program a
                system capable of maintaining its position in the air. The
                hardware was designed and assembled for this basic function of
                hovering, with consideration of RTOS presence.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                Hardware of the drone was designed in EasyEda, it was composed
                from ESP32 based dev board along with accelerometer and
                gyroscope (MPU6050), 4x ESC, a battery and a phone as the
                controller. Software has been written in Arduino IDE using C++
                language. Main advantage of that project was utilizing both of
                ESP32 fast cores which were working simultaneously to make the
                system faster and more reliable. Project was highly based on
                RTOS. The drone was connected through WiFi to the phone, the app
                written for IOS was controlling the Drone position.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div>
                <GenerateImage img={drone1} />
                <GenerateImage img={drone2} />
                <GenerateImage img={drone3} />
                <GenerateImage img={drone4} />
              </div>
            ),
          });
        } else if (currentId === "drone") {
          this.clearState();
        }
        break;
      case "dsp":
        if (currentId != "dsp") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({
            name: "DSP of Speakers",
          });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Software language:</b> SigmaStudio{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> Mayht Driver,
                ADAU1701
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                One of the projects that I took part in my current full time
                job. Digital Signal Processing of the Drivers created by our
                company.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                Block programming of the DSP solution for various Speaker
                devices concluded after measurements.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div>
                <GenerateImage img={dsp1} />
                <GenerateImage img={dsp2} />
                <GenerateImage img={dsp3} />
              </div>
            ),
          });
        } else if (currentId === "dsp") {
          this.clearState();
        }
        break;
      case "mayhtierMini":
        if (currentId != "mayhtierMini") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({
            name: "Miniutarized Amplifier with DSP capabilities and Bluetooth communication",
          });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Hardware design:</b>KiCad & Altium
                Designer <p className="break-normal"></p>
                <b className="font-bold">Software language:</b> C{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> STM32,
                STM32CubeIDE, BM64, ADAU1701, MA12070P
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                I was lead engineer on minaturization of the amplifier board-
                the system was earlier created by different engineer. With an
                intern we have defined and designed the smaller version.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                This PCB is a fully working Bluetooth amplifier with DSP
                capabilities. Infineon amplifier technology allowed for very
                small size (3x6cm) yet high power output (360W Peek). It is
                fully adjustable for user usage- DSP can be re-uploaded and
                stored on board, Bluetooth name/ functions can be altered. The
                main MCU uses STM32 technology to control all the perypherials.
                I was included in hardware design on most of the stages.
                Software was fully adjusted by me.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div>
                <GenerateImage img={noimage} />
              </div>
            ),
          });
        } else if (currentId === "mayhtierMini") {
          this.clearState();
        }
        break;
      case "storeIn":
        if (currentId != "storeIn") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({
            name: "StoreIN- Python based app for sotring receipts with google photos API",
          });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Software language:</b> Python{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> Kivy, google-api
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                StoreIn is a Python based project that takes a picture and
                stores it in Google Photos album. After specyfing the expiration
                time of the receipt, it is stored and later can be checked
                either in the app or the Google Drive of the user.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                App was created with Python 3.7, focusing on the Google API
                usage. The user after first launch would connect his Google
                Photos account to the app, which later would create folder of
                StoreIN receipts. That project was created for the convinence of
                storing the receipts of expensive items in one place with few
                clicks on the device.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div>
                <GenerateImage img={storein1} />
                <GenerateImage img={storein2} />
                <GenerateImage img={storein3} />
              </div>
            ),
          });
        } else if (currentId === "storeIn") {
          this.clearState();
        }
        break;
      case "sensorBoard":
        if (currentId != "sensorBoard") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({
            name: "Sensor board with web server for readings",
          });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Hardware design:</b>EasyEda{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Software language:</b> C++, Js, HTML{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> ESP32,
                Platformio, IOT
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                ESP32 based dev board with sensors for vast amount of
                measurements. ESP32 hosts a server which user can connect to on
                specific port to access the view of those measurements.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                Main MCU takes care of the microphone and Barometric
                Pressure/Altitude/Temperature Sensor data, then it converts the
                readings to Json files and tranfers them to the web server. One
                of the core functions was the FFT display on the web server,
                with almost 0 lag for given spectrum. The device was assembled
                on breadboard.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div>
                <GenerateImage img={sensorboard1} />
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/2evBXNGTNFw"
                />
              </div>
            ),
          });
        } else if (currentId === "sensorBoard") {
          this.clearState();
        }
        break;
      case "xbox360":
        if (currentId != "xbox360") {
          this.clearState();
          this.setState({ currentId: data });
          this.setState({
            name: "Xbox360 controller + Bluetooth for Electronics controll",
          });
          this.setState({
            tech: (
              <div>
                <b className="font-bold">Software language:</b> Python{" "}
                <p className="break-normal"></p>
                <b className="font-bold">Technologies used:</b> Xbox360
                controller, Bluetooth
              </div>
            ),
          });
          this.setState({
            intr: (
              <p>
                In this project Xbox360 controller with cable interface was
                connected to a laptop with Bluetooth capabilities, later laptop
                is streaming inputs from controller to a any electronic device
                that can use those- eg ESP8266.
              </p>
            ),
          });
          this.setState({
            des: (
              <p>
                Code in this project utilized PyGame and Serial libraries of
                Python. PyGame is constantly checking the inputs of the Xbox360
                controller in controller.py script, those are then transfered to
                the connection.py script which handles the connected device.
              </p>
            ),
          });
          this.setState({
            pics: (
              <div>
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/uClVZDvZWEs"
                />
              </div>
            ),
          });
        } else if (currentId === "xbox360") {
          this.clearState();
        }
        break;
      default:
        this.clearState();
    }
    // if (this.state.wasClicked === ) {
    //   this.setState({ wasClicked: true });
    //   this.setState({ icon: clickedIcon });
    // }
    // if (this.state.wasClicked != false) {
    //   this.setState({ wasClicked: false });
    //   this.setState({ icon: noIcon });
    // }
  };
  render() {
    const { currentId, name, name_des, tech, intr, des, pics } = this.state;
    return (
      <div className="relative">
        <GenerateBackground img={background} />
        <GenerateTxt
          text="Projects"
          position="top-[9%] left-[14.5%]"
          additionalClasses="font-bold"
        />
        <GenerateTxt
          text="Select a project for overview"
          position="top-[13.3%] left-[14.5%]"
        />
        <div className="absolute left-[8%] top-[21.5%] w-[7%] h-[63.5%]  overflow-auto scrollbar Flipped">
          <div className="flex justify-center content-center flex-col item_direction">
            <GenerateProjectIcon
              img={pcb}
              id="pcb"
              parentCallback={this.handleClick}
              icon={currentId === "pcb" ? clickedIcon : noIcon}
              currentId={currentId}
            />
            <GenerateProjectIcon
              img={speaker}
              id="speaker"
              parentCallback={this.handleClick}
              icon={currentId === "speaker" ? clickedIcon : noIcon}
              currentId={currentId}
            />
            <GenerateProjectIcon
              img={drone}
              id="drone"
              parentCallback={this.handleClick}
              icon={currentId === "drone" ? clickedIcon : noIcon}
              currentId={currentId}
            />
            <GenerateProjectIcon
              img={dsp}
              id="dsp"
              parentCallback={this.handleClick}
              icon={currentId === "dsp" ? clickedIcon : noIcon}
              currentId={currentId}
            />
            <GenerateProjectIcon
              img={mayhtierMini}
              id="mayhtierMini"
              parentCallback={this.handleClick}
              icon={currentId === "mayhtierMini" ? clickedIcon : noIcon}
              currentId={currentId}
            />
            <GenerateProjectIcon
              img={storeIn}
              id="storeIn"
              parentCallback={this.handleClick}
              icon={currentId === "storeIn" ? clickedIcon : noIcon}
              currentId={currentId}
            />
            <GenerateProjectIcon
              img={sensorBoard}
              id="sensorBoard"
              parentCallback={this.handleClick}
              icon={currentId === "sensorBoard" ? clickedIcon : noIcon}
              currentId={currentId}
            />
            <GenerateProjectIcon
              img={xbox360}
              id="xbox360"
              parentCallback={this.handleClick}
              icon={currentId === "xbox360" ? clickedIcon : noIcon}
              currentId={currentId}
            />
          </div>
        </div>
        {/* Name */}
        <div className="absolute top-[21.5%] left-[17%] w-[50%] h-[5%] ">
          <GenerateTxt text={name} />
        </div>
        <div className="absolute top-[27.5%] left-[17%] w-[40%] h-[5%] ">
          <GenerateTxt text={name_des} />
        </div>
        {/* Tech used */}
        <div className="absolute top-[35.5%] left-[17.7%] w-[21%] h-[29%] ">
          <GenerateTxt
            text={tech}
            text_pos=" text-left "
            rest=" leading-loose "
          />
        </div>
        {/* Intro */}
        <div className="absolute top-[65%] left-[16.6%] w-[22.5%] h-[20%] ">
          <GenerateTxt text={intr} />
        </div>
        {/* Descirption */}
        <div className="absolute top-[35%] left-[40.6%] w-[22.5%] h-[50%] overflow-auto scrollbar">
          <GenerateTxt text={des} />
        </div>
        {/* Pictures */}
        <div className="absolute top-[26%] right-[6.5%] w-[28%] h-[55%] overflow-auto scrollbar">
          {pics}
        </div>
        <Link to={{ pathname: "/", state: { menuStatus: "visible" } }}>
          <SubMenuButton
            text="Back"
            position="top-[90%] left-[8%]"
            parentCallback={() => {
              return 0;
            }}
          />
        </Link>
      </div>
    );
  }
}

export default Projects;
