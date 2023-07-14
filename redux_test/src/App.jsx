import React, { Component } from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 可以在这里引入多个组件 */}
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}
