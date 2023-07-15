import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "奔驰c36", stus: ["小张", "小李", "小王"] };

  addStu = () => {
    /* const {stus} = this.state
		stus.unshift('小刘')
		this.setState({stus}) */

    const { stus } = this.state;
    this.setState({ stus: ["小刘", ...stus] });
  };

  changeCar = () => {
    //this.setState({carName:'迈巴赫'})

    const obj = this.state;
    obj.carName = "迈巴赫";
    console.log(obj === this.state);
    // setState是做了一个浅对比，setState的话如果传入的是一个新对象，会发生render，如果传入的是原来的state，不会发生render。
    this.setState(obj);
  };

  /* shouldComponentUpdate(nextProps,nextState){
		// console.log(this.props,this.state); //目前的props和state
		// console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.state.carName === nextState.carName
	} */

  render() {
    console.log("Parent---render");
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {this.state.stus}&nbsp;
        <span>我的车名字是：{carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>添加一个小刘</button>
        <Child carName="奥拓" />
      </div>
    );
  }
}

class Child extends PureComponent {
  /* shouldComponentUpdate(nextProps,nextState){
		console.log(this.props,this.state); //目前的props和state
		console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.props.carName === nextProps.carName
	} */

  render() {
    console.log("Child---render");
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接到的车是：{this.props.carName}</span>
      </div>
    );
  }
}
