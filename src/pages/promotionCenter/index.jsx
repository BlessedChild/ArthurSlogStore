// 这个组件是推广中心的主页
// 用来承载推广中心页面上的所有组件
import React, { Component } from 'react'

import BodyContainer from './bodyContainer/BodyContainer'
import Bottom from './Bottom/Bottom'

import './index.less'
// 这里引入子组件


class promotionCenter extends Component {
    render() {
        return <div className='promotionCenter_index'>
            <BodyContainer />
            <Bottom changePage = {this.props.changePage}/>
        </div>
    }
}

export default promotionCenter