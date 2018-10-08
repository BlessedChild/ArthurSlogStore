// 引用React框架
import React from "react";
import ReactDOM from "react-dom";

// 引用第三方插件react-hot-loader里的hot方法
import { hot } from 'react-hot-loader'

/*
// this.props 拿到上一级传过来的数据
class App extends React.Component {
  render() {
    return <div>Hello {this.props.aaa} {this.props.bbb}</div>;
  }
}
*/
import App from './App'

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot />, mountNode);