///
/// 构造虚拟dom对象
///
import React, { Component } from 'react';

import Header from './Header'
import BodyContainer from './BodyContainer'
import Bottom from './Bottom'

const iphone8Style = { position: "absolute", width: '100%', height: 4096 }

class App extends Component {

  componentWillMount() {
    document.documentElement.style.position = "absolute";
    document.documentElement.style.width = "100%";
    document.documentElement.style.height = "100%";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.overflowX = "hidden";
    document.documentElement.style.overflowY = "auto";

    document.body.style.position = "absolute";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
  }

  render() {
    return <div className='page-container' style={iphone8Style}>
      <Header />
      <BodyContainer />
      <Bottom />
    </div>
  }
}
// 导出虚拟dom对象，供主函数进行数据插入和最终webapp渲染
export default App;
