import React, { useState } from 'react';
import "./App.css"
import "./styles/Reloadbar.css"
import Rain from "./components/rain"
import ReloadBar from "./components/reloadBar"
import TitleBar from './components/titleBar';


const App = () => {
  const [isRaining, setRaining] = useState("running");
  // const Raining = new Rain(isRaining);
  const [isClicked, setClicked] = useState(false);
  const reloadbar = () => {
    setClicked(!isClicked);
    //setRaining("deleted");
  } 
 

//onAnimationEnd thing needs to be done at the end setRaining("deleted")  
  return(
     <div>
      {/* <div>{isRaining ? Raining.rainStatus(isRaining) : ""}</div>
      <h2 className= "mainText" >Maciej Waskiewicz</h2>
      <button className = "subText "><span>Click to see my Portfolio</span></button> */}
      <TitleBar title= "Maciej Waskiewicz" continueButtonText = "Click to see my portfolio"/>
      <ReloadBar animationName= "reloadbar" />
      <ReloadBar animationName= "topLayer" />

      
      {/* <p className={isClicked ? 'reloadbar' : ''} ></p> */}
      {/* <p className={isClicked ? 'topLayer' : ''} ></p> */}
    </div>
  );

}

export default App;
