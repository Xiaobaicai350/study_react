/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux";
//引入为Count组件服务的reducer
import countReducer from "./reducers/count";
//引入为Count组件服务的reducer
import personReducer from "./reducers/person";
//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";
//引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer,
});

//暴露store
// 第一个参数是汇总所有的reducer为一个参数。
// 这里的第二个参数是引入Redux的工具，个人感觉这个写法很差劲，一点都不优雅，不如pinia那样简便，这里还需要下载依赖和进行代码的配置，太麻烦了
export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
