// 这个组件是购物车的主页
// 用来承载购物车页面上的所有组件
import React, { Component } from 'react'

import './ReturnStoreIndex.less'
// 这里引入一个组件，显示用户加入购物车的商品的数据，这里这个组件应该是一个列表
// import shoppingCartProductsList from './shoppingCartProductsList'

class ReturnStoreIndex extends Component {

    render() {
        return <div className='mobile_returnStoreIndex'>
            <div className='mobile_returnStoreIndex_return' onClick={this.touchBottomTabBar.bind(this, 0)}>
            {'\u003c'}= 返回首页
            </div>
        </div>
    }

    touchBottomTabBar(e) {
        this.props.changePage(e)
    }
}

export default ReturnStoreIndex