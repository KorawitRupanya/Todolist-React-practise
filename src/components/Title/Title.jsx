import React from "react";
import Subtitle from "../Subtitle/Subtitile";

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.text}
          {this.props.suffix}
        </h1>
        <Subtitle number={this.props.number} />
      </div>
    );
  }
}
export default Title;
