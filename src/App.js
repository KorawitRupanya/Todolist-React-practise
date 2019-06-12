import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Todo from "./components/TodoList/TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Title text="Kimmu Jee " suffix="kimmy" number={123} />
        <Button text="z" add={1} />
        <Button text="a" add={2} />
        <Button text="b" add={5} />
        <Button text="c" add={6} />
        <Input /> */}
        <Todo />
      </div>
    );
  }
}

export default App;
