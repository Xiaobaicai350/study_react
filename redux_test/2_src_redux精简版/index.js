import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App />, document.getElementById("root"));

// 可以直接写到这里
// 这里的话效率也不会太低，因为有diff算法
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
