// 这个组件是个人中心的主页
// 用来承载个人中心页面上的所有组件
import React, { Component } from 'react'

import BodyContainer from './bodyContainer/BodyContainer'
import Bottom from './bottom/Bottom'

import './index.less'
// 这里引入子组件


class personalCenter extends Component {
    render() {
        return <div>
            <BodyContainer />
            <Bottom changePage={this.props.changePage} />
        </div>
    }
}

export default personalCenter