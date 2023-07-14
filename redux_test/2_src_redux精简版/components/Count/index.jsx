import React, { Component } from "react";
//引入store，用于获取redux中的state
import store from "../../redux/store";

export default class Count extends Component {
  // 这里想表达的意思是不被redux管理的state，可以放在组件里面
  state = { carName: "奔驰c63" };

  /* componentDidMount(){
		//检测redux中状态的变化，只要变化，就调用render
    //其实就是虚晃render一下，更新state会调用render
    // 但是在这里写的话我们需要在每个用到redux的组件里面都得写，所以为了精简，可以直接写到外侧的index.js下。
		store.subscribe(()=>{
			this.setState({})
		})
	} */

  //加法
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: "increment", data: value * 1 });
  };
  //减法
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: "decrement", data: value * 1 });
  };
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({ type: "increment", data: value * 1 });
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch({ type: "increment", data: value * 1 });
    }, 500);
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
