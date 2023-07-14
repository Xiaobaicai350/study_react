import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // 仍然是把store传入进去，store里面有person和count里面的数据
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
