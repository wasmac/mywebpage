import React, { Component, useState, AnimationEvent } from 'react';

//what it should do? 
//-> create a reloadbar or any animation <p></p> on click
//-> on same click do log("animation started") onAnimationStart
//-> onAnimationEnd return a value =1 



class ReloadBar extends Component {
    render() { 
        const {animationName} = this.props;
        return <p className = {animationName} key= {animationName} onAnimationEnd = {this.handleAnimationEnd} />;
    }
}

 
export default ReloadBar;





// class Animations extends React.Component{
//     constructor(animationId){
//         super();
//         this.animationId = animationId; 
//         const [isClicked, setClicked] = useState(false);   
//     }
//     onClick(){
        
//         return <p className = {this.animationId} id={this.animationId}></p>
//     }
//     animationStatus(){
//         this.animationId.onAnimationEnd(console.log("sjema"));
        
//         //console.log(this.currentStatus);
//         // this.currentStatus.onAnimationStart(console.log("animation started"))
//         // this.currentStatus.onAnimationEnd(console.log("animation finished"))
//     }
// }

