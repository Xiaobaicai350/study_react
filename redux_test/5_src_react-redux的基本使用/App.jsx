import React, { Component } from "react";
import Count from "./containers/Count";
import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 
          给容器组件传递store 
          这样可以方便 容器组件 得到store中的state和dispatch
        */}
        <Count store={store} />
      </div>
    );
  }
}
