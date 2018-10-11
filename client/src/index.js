// 引用React框架
import React from "react";
import ReactDOM from "react-dom";

// 引用第三方插件react-hot-loader里的hot方法
import { hot } from 'react-hot-loader'

// 
import App from './App'

// 
import './index.less'

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot />, mountNode);