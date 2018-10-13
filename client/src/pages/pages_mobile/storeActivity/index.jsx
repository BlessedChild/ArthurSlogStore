// 这个组件是推广中心的主页
// 用来承载推广中心页面上的所有组件
import React, { Component } from 'react'

import BodyContainer from './bodyContainer/BodyContainer'
import Bottom from './bottom/Bottom'

import './index.less'
// 这里引入子组件


class storeActivity extends Component {
    render() {
        return <div className='storeActivity_index'>
            <BodyContainer />
            <Bottom changePage = {this.props.changePage}/>
        </div>
    }
}

export default storeActivity