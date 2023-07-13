import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
	render() {
		// console.log(this.props);
		return (
			// <NavLink  children="Demo"/>
			// <NavLink  >Demo</NavLink>
			// 上面这两个是等价的
			// 所以下面如果props里面有children属性会直接传递到子组件的属性中
			// 下面这个会直接把父组件传递过来的属性全部接收并展开，是JavaScript的语法
			<NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
		)
	}
}
