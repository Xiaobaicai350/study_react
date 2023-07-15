import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    //对象式的setState
    //1.获取原来的count值
    const { count } = this.state;
    //2.更新状态
    this.setState({ count: count + 1 }, () => {
      console.log(this.state.count); //这里会获得更新后的值，更新后会调用这段代码
    });
    console.log("12行的输出", this.state.count); //还是更新前的值，原因是react更新state是异步的，所以这句代码会比更新先执行。

    //函数式的setState
    this.setState((state) => ({ count: state.count + 1 })); //这里当然也可以传一个回调。也就是第二个参数，和上面的一样
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
