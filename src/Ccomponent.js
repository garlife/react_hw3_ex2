import React, { Component } from "react";
import {Afcomponent} from "./Afcomponent";

export class Ccomponent extends Component {
  render() {
    return (
      <div>
        <Afcomponent />
        <h2>Ccomponent {this.props.numbers.join(',')}</h2>
      </div>
    );
  }
}
Ccomponent.defaultProps = {numbers:[1,2,3,4]}
