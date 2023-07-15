import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";

// 原始的引入，这里会直接引入进去，没有实现懒加载
// import Home from './Home'
// import About from './About'

// Loading组件是下面某个组件正在加载中的时候呈现的，所以需要直接引入
import Loading from "./Loading";
// 这两个可以用懒加载
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                  这里必须要指定这个标签，意思是下面路由组件正在加载的时候显示的组件
                  如果没有这个标签的话会报错
                */}
                <Suspense fallback={<Loading />}>
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
