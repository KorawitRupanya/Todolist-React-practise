import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      InputTask: ""
    };
  }

  handleClick = event => {
    const value = this.state.InputTask;
    var joined = this.state.todoItems.concat(value);
    if (!value) return;
    this.setState({
      todoItems: joined,
      InputTask: ""
    });
  };

  handleChange = event => {
    this.setState({
      InputTask: event.target.value
    });
  };

  onListClick = item => {
    const items = this.state.todoItems;
    this.setState({
      todoItems: items.filter(listItem => listItem !== item)
    });
  };

  render() {
    const listContents = this.state.todoItems.map(item => {
      return (
        <li
          key={item}
          onClick={() => {
            this.onListClick(item);
          }}
        >
          {item}
        </li>
      );
    });

    return (
      <div>
        <input
          value={this.state.InputTask}
          placeholder="Please input something!!!"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Click me!!!</button>
        <ul>{listContents}</ul>
      </div>
    );
  }
}
export default TodoList;
