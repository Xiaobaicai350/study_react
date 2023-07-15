import React from "react";
import { useInRouterContext } from "react-router-dom";

export default function Demo() {
  // 这里会打印为false，因为没处于上下文环境中
  console.log(useInRouterContext());
  return <div>Demo</div>;
}
