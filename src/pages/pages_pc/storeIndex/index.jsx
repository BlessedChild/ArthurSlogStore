// 这个组件是商城主页
// 用来承载商城主页页面上的所有组件
import React, { Component } from 'react'

// 引入完整页面的所有组件
import Header from './header/Header'
import BodyContainer from './bodyContainer/BodyContainer'

// 引入当前页面的样式
import './index.less'

class storeIndex extends Component {
    render() {
        return <div className='pc_StoreIndex'>
            <Header changePage = {this.props.changePage}/>
            <BodyContainer />
        </div>
    }
}

export default storeIndex