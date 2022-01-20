import React, { Component,  } from 'react';
import Rain from "../components/rain"
import "../App.css"
import rain from '../components/rain';


class TitleBar extends Component {
    render() {
        const {title, continueButtonText} = this.props;
        return (
            <div>
                {/* <div>{this.isRaining ? this.Raining.rainStatus(this.isRaining) : ""}</div> */}
                {this.createRain()}
                <h2 className= "mainText" >{title}</h2>
                <button className = "subText " onClick = {this.deleteRain}>{continueButtonText}</button>
            </div>

        );
    }
    createRain = () =>{
        return rain("running");
    }
    deleteRain = () =>{
        console.log("dupa")
       // return rain("deleted");
    }
}

 
export default TitleBar;