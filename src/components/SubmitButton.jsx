import React, { Component } from "react";

export default class SubmitButton extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="button-print">
        <button onClick={this.props.onClickHandeler}>{this.props.name}</button>
      </div>
    );
  }
}
