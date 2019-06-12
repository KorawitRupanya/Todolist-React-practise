import React, { Component } from "react";

// class Input extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     };
//   }
//   handleChange = event => {
//     const text = event.target.value;
//     console.log(text);
//     this.setState({
//       counter: text.length
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.handleChange} />
//         <span>{this.state.counter}</span>
//       </div>
//     );
//   }
const Input = props => {
  const [counter, setCounter] = React.useState(0);
  const [text, setText] = React.useState("");

  const handleChange = event => {
    const text = event.target.value;
    console.log(text);
    setCounter(text.length);
    setText(text);
  };
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Please input" />
      <div>Count: {counter}</div>
      <div>InputText: {text}</div>
    </div>
  );
};

export default Input;
