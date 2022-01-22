import React, { Component, useState  } from 'react';
import Rain from "../components/rain"
import "../App.css"
import rain from '../components/rain';


class TitleBar extends Component {
    state = { 
        currentStatus: "running",
    }
    render() {
        const {title, continueButtonText} = this.props;
        return (
            <div>
                <Rain currentStatus = {this.state.currentStatus}/>
                <h2 className= "mainText" >{title}</h2>
                <button className = "subText " onClick = {this.handleRain}>{continueButtonText}</button>
            </div>

        );
    }
    handleRain = () =>{
        this.setState({currentStatus : "paused"});
    }
}

 
export default TitleBar;