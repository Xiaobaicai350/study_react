import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  // 通过useLocation进行接收数据
  //下面用了结构赋值的嵌套写法
  const {
    state: { id, title, content },
  } = useLocation();
  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  );
}
