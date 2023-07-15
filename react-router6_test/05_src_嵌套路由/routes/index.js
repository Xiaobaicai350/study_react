import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        // 子路由可以直接写路径，不需要再加父的路径了
        path: "news",
        element: <News />,
      },
      {
        path: "message",
        element: <Message />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];
