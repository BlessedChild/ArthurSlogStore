import React, { Component } from 'react'

import './navigationBar.less'

const bottomTabBarItemStyle = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '1px', marginRight: '1px' }
const bottomTabBarItemStyleLeft = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '0.5px', marginRight: '1px' }
const bottomTabBarItemStyleRight = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '1px', marginRight: '0.5px' }
const bottomTabBarItemImg = { height: '88px', width: '88px', textAlign: 'center', lineHeight: '88px', backgroundColor: '#FFFFFF' }
const bottomTabBarItemText = { height: '40px' }

class NavigationBar extends Component {

    // 对应‘购物车’按钮
    // 这里创建一个函数，用于向服务器请求shoppingCart相关的数据，点击购物车按钮时执行（然后渲染购物车页面，隐藏Header组件，替换BodyContainer组件的页面）？所以想到这里，BodyContainer组件是不是需要做成由动态组件组成的？根据数据进行渲染？还是直接路由道购物车页面？
    // 然后，把获得的数据传给shoppingCart页面
    // 怎么传递，通过props
    // 在这个组件里，导入shoppingCart import from ‘pages/shoppingCart/index’
    // 然后，在这个组件里的render（）方法里，使用<shoppingCart shoppingCartData=上述函数先服务器请求获得的数据>，把数据传给 ‘pages/shoppingCart/index’
    // 接下来，在 ‘pages/shoppingCart/index.js’ 里，使用 this.props.shoppingCartData 接收这个数据

    //其他按钮同理

    render() {
        return <div className='pc_NavigationBar'>
            <div className='pc_NavigationTabBar'>
                <div className='pc_StoreIndexTabBar' onClick={this.touchBottomTabBar.bind(this, 0)}>
                    <div className='pc_NavigationTabBarItemImg'>图片</div>
                    <div className='pc_NavigationTabBarItemText'>商城首页</div>
                </div>
                <div className='pc_StoreActivityTabBar' onClick={this.touchBottomTabBar.bind(this, 1)}>
                    <div className='pc_NavigationTabBarItemImg'>图片</div>
                    <div className='pc_NavigationTabBarItemText'>商城活动</div>
                </div>
                <div className='pc_ShoppingCartTabBar' onClick={this.touchBottomTabBar.bind(this, 2)}>
                    <div className='pc_NavigationTabBarItemImg'>图片</div>
                    <div className='pc_NavigationTabBarItemText'>购物车</div>
                </div>
                <div className='pc_PersonalCenterTabBar' onClick={this.touchBottomTabBar.bind(this, 3)}>
                    <div className='pc_NavigationTabBarItemImg'>图片</div>
                    <div className='pc_NavigationTabBarItemText'>个人中心</div>
                </div>
            </div>
        </div>
    }

    touchBottomTabBar(e) {
        this.props.changePage(e)
    }
}

export default NavigationBar