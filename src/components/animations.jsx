import React, { Component} from 'react';


// import React, { Component, AnimationEvent, PropTypes  } from 'react';
//what it should do? 
//-> create a reloadbar or any animation <p></p> on click
//-> on same click do log("animation started") onAnimationStart
//-> onAnimationEnd return a value =1 

//why ppl on interent can pass value and i cant?-- PropTypes import

class Animations extends Component {
    render() { 
        const {animationName} = this.props;
        return <p className = {animationName} key= {animationName}/>;
    }
}

 
export default Animations;
