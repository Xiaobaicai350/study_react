import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // 通过Provider进行自动传输store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
