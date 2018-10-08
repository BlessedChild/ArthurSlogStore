import React, { Component } from 'react'


const bottomStyle = { backgroundColor: '#FFFFFF', position: "fixed", bottom: 0, height: 128, width: '100%', fontSize: 28, textAlign: 'center' }
const bottomTabBarStyle = { display: 'flex', alignItems: 'stretch', backgroundColor: '#FFFFFF', height: 128 }
const bottomTabBarItemStyle = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '1px', marginRight: '1px' }
const bottomTabBarItemStyleLeft = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '0.5px', marginRight: '1px' }
const bottomTabBarItemStyleRight = { alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#d8f0f3', color: '#000000', width: '33.3%', marginLeft: '1px', marginRight: '0.5px' }
const bottomTabBarItemImg = { height: '88px', width: '88px', textAlign: 'center', lineHeight: '88px', backgroundColor: '#FFFFFF' }
const bottomTabBarItemText = { height: '40px' }

class Bottom extends Component {
    // 对应‘购物车’按钮
    // 这里创建一个函数，用于向服务器请求shoppingCart相关的数据，点击购物车按钮时执行（然后渲染购物车页面，隐藏Header组件，替换BodyContainer组件的页面）？所以想到这里，BodyContainer组件是不是需要做成由动态组件组成的？根据数据进行渲染？还是直接路由道购物车页面？
    // 然后，把获得的数据传给shoppingCart页面
    // 怎么传递，通过props
    // 在这个组件里，导入shoppingCart import from ‘pages/shoppingCart/index’
    // 然后，在这个组件里的render（）方法里，使用<shoppingCart shoppingCartData=上述函数先服务器请求获得的数据>，把数据传给 ‘pages/shoppingCart/index’
    // 接下来，在 ‘pages/shoppingCart/index.js’ 里，使用 this.props.shoppingCartData 接收这个数据

    //其他按钮同理

    render() {
        return <div className='bottom' style={bottomStyle}>
            <div className='bottomTabBar' style={bottomTabBarStyle}>
                <div className='storeIndex' style={bottomTabBarItemStyleLeft} onClick={this.touchBottomTabBar}>
                    <div style={bottomTabBarItemImg}>图片</div>
                    <div style={bottomTabBarItemText}>商城首页</div>
                </div>
                <div className='shoppingCart' style={bottomTabBarItemStyle} onClick={this.touchBottomTabBar}>
                    <div style={bottomTabBarItemImg}>图片</div>
                    <div style={bottomTabBarItemText}>购物车</div>
                </div>
                <div className='promotionCenter' style={bottomTabBarItemStyle} onClick={this.touchBottomTabBar}>
                    <div style={bottomTabBarItemImg}>图片</div>
                    <div style={bottomTabBarItemText}>推广中心</div>
                </div>
                <div className='personalCenter' style={bottomTabBarItemStyleRight} onClick={this.touchBottomTabBar}>
                    <div style={bottomTabBarItemImg}>图片</div>
                    <div style={bottomTabBarItemText}>个人中心</div>
                </div>
            </div>
        </div>
    }

    touchBottomTabBar() {
        alert("Im an alert")
    }


}

export default Bottom