import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <A>
          <B />
        </A>
      </div>
    );
  }
}

class A extends Component {
  state = { name: "tom" };
  render() {
    console.log(this.props);
    const { name } = this.state;
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {/* 渲染B，但是这里没办法传递props */}
        {this.props.children()}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log("B--render");
    return (
      <div className="b">
        <h3>我是B组件</h3>
      </div>
    );
  }
}
