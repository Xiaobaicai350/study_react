//引入Count的UI组件
import CountUI from "../../components/Count";
//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

//引入connect用于连接UI组件与redux
import { connect } from "react-redux";

//mapStateToProps和mapDispatchToProps这两个函数的函数名称可以随便起，
//但是为了命名规范我们还是起成这两个名字就好啦

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
  至于参数的state是react-redux给我们自动调用的store.getstate()方法，然后帮我们封装进参数里了
  至于store是哪里来的，在App.jsx里面，通过props自动给我们传递过来了。
*/
function mapStateToProps(state) {
  return { count: state };
}

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
  至于dispatch这个参数，这个是react-redux给我们自动传入的，不用关系，直接用就可以了
*/
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => dispatch(createIncrementAction(number)),
    jian: (number) => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) =>
      dispatch(createIncrementAsyncAction(number, time)),
  };
}

//使用connect()()连接UI组件，并且向UI组件中传入state和操作state的方法。
//并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
