import React, { Component} from 'react';
import Rain from "../components/rain"
import "../App.css"
import "../styles/Reloadbar.css"
import ReloadBar from "../components/reloadBar"
import Animations from "./animations"

// import React, { Component, useState, AnimationEvent, PropTypes} from 'react';
// onAnimationEnd of ReloadBar do handleRain


class TitleBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStatus: "running"
        }
    }
    setRain = (data) =>{
        console.log("animation finished- titleBar");
        this.setState({currentStatus : data});
    }
    render() {
        const {title, continueButtonText} = this.props;
        const {currentStatus} = this.state;
        return (
            <div>
                <Rain currentStatus = {currentStatus}/>
                <h2 className= "mainText" >{title}</h2>
                <button className = "subText " onClick = {this.setRain}>{continueButtonText}</button>
                <Animations animationName= "topLayer" />
                <ReloadBar animationName= "reloadbar" parentCallback = {this.setRain} />
            </div>

        );
    }

}

 
export default TitleBar;