import React, { useState } from 'react';
import "./App.css"
import "./styles/Reloadbar.css"
import Rain from "./components/rain"
import ReloadBar from "./components/reloadBar"
import TitleBar from './components/titleBar';


const App = () => {

  return(
     <div>
      <TitleBar title= "Maciej Waskiewicz" continueButtonText = "Click to see my portfolio" />
      <ReloadBar animationName= "reloadbar" />
      <ReloadBar animationName= "topLayer" />
    </div>
  );

}

export default App;
