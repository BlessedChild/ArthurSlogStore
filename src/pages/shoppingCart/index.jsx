// 这个组件是购物车的主页
// 用来承载购物车页面上的所有组件
import React, { Component } from 'react'

import BodyContainer from './bodyContainer/BodyContainer'
import Bottom from './Bottom/Bottom'

import './index.less'
// 这里引入一个组件，显示用户加入购物车的商品的数据，这里这个组件应该是一个列表
// import shoppingCartProductsList from './shoppingCartProductsList'

class shoppingCart extends Component {


    // 这里创建一个函数，用来编辑用户放进购物车里的商品数量

    // 这里创建一个函数，用来发起支付功能


    // 然后，把获得的数据传给
    render() {
        return <div>
            <BodyContainer />
            <Bottom changePage = {this.props.changePage}/>
        </div>
    }
}

export default shoppingCart