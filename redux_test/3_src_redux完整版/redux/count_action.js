/* 
	该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant";

// 这里的箭头函数里面返回的对象是一个对象！！
// 这个对象是{type:INCREMENT,data}
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
