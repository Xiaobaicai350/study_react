import React, { Component, Fragment } from "react";

export default class Demo extends Component {
  render() {
    return (
      // <Fragment key={1}>
      // 	<input type="text"/>
      // 	<input type="text"/>
      // </Fragment>
      //这个和上面的区别只有上面可以传递key属性，其他的没什么区别
      <>
        <input type="text" />
        <input type="text" />
      </>
    );
  }
}
