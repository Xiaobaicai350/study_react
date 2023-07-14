import { ADD_PERSON } from "../constant";

//初始化人的列表
const initState = [{ id: "001", name: "tom", age: 18 }];

export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON: //若是添加一个人
      //preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。纯函数的定义是原数组不能发生数据改变，改变了就不纯了。并且reducer必须是纯函数。
      //如果使用上面那种方法，虽然数组的内容发生改变了，但是react不会检测出数组内容发生改变，下面这种方式是新建了一个数组，地址都改变了，所以会被监测到，这里也符合纯函数的定义，所以我们一般都不用数组自带的方法进行push什么的，而是用展开运算符进行重新创建一个数组，但是这里我觉得不太好，会有效率问题。。。
      return [data, ...preState];
    default:
      return preState;
  }
}
