import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + this.props.add
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me to go to salon {this.state.counter}
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
