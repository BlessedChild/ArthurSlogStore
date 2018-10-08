// 这个组件是购物车的主页
// 用来承载购物车页面上的所有组件
import React, { Component } from 'react'

// 这里引入一个组件，显示用户加入购物车的商品的数据，这里这个组件应该是一个列表
import shoppingCartProductsList from './shoppingCartProductsList'

const bodyContainer_shopingCartStyle = { zIndex: -1, position: "relative", marginTop: 0, marginBottom: 128, height: '100%', width: '100%', fontSize: 40, textAlign: 'center' }

class shoppingCart extends Component {


    // 这里创建一个函数，用来编辑用户放进购物车里的商品数量

    // 这里创建一个函数，用来发起支付功能


    // 然后，把获得的数据传给
    render() {
        return <div className='bodyContainer_shopingCart' style={bodyContainer_shopingCartStyle}>
            ShoppingCart
            <shoppingCartProductsList />
        </div>
    }
}

export default shoppingCart