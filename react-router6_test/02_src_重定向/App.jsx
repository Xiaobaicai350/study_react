import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
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
            {/* 路由链接 */}
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
              {/* 注册路由 */}
              {/* Routes和Switch的区别是Switch是为了提升效率，可写可不写。
              但是Routes必须得写，也能实现Switch的功能。 */}
              <Routes>
                <Route path="/about" element={<About />} />
                {/* 默认不区分大小写 */}
                <Route path="/HOME" element={<Home />} />
                {/* 这里表示如果路径是/，也就会默认重定向到about路径下，进行渲染About组件 */}
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
