import React, { Component } from "react";
import MyNavLink from "../../components/MyNavLink";
import { Route, Switch, Redirect } from "react-router-dom";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            {/* 需要注意的是，这里的一级路由的路径不能省略，需要跟在二级路由的前面 */}
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            {/* 需要注意的是，这里的一级路由的路径不能省略，需要跟在二级路由的前面 */}
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            {/* 需要注意的是，这里的一级路由的路径不能省略，需要跟在二级路由的前面 */}
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
