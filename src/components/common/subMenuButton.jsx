import React, { Component } from "react";

//each button navigates to different object
//it takes "text" "component_name" and privdies "/ + component name form function"

// function SubMenuButton({ text, position, parentCallback, ...rest }) {
//   const options = Object.values({ ...rest });
//   const classNames = position + " " + options;

//   function handleClick() {
//     this.props.parentCallback("visible");
//   }
//   return (
//     <div>
//       <div
//         className={`" subMenuTxt text-white font-light
//                     uppercase absolute flex px-0.5 hover:bg-red-900
//                     cursor-default w-1/12 " ${classNames} `}
//       >
//         <button onClick={handleClick}>{text}</button>
//       </div>
//       <div>{jobsButtons}</div>
//     </div>
//   );
// }

// export default SubMenuButton;

class SubMenuButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      classNames: this.props.position + " " + this.props.options,
    };
  }
  render() {
    const { text } = this.props;
    return (
      <div>
        <div
          className={`" subMenuTxt text-white font-light
                      uppercase absolute flex px-0.5 hover:bg-red-900
                      cursor-default w-1/12 " ${this.state.classNames} `}
        >
          <button onClick={this.handleClick}>{text}</button>
        </div>
      </div>
    );
  }
  handleClick() {
    const { id } = this.props;
    this.props.parentCallback(id);
  }
}

export default SubMenuButton;
