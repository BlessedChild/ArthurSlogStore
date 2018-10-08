import React, { Component } from 'react'

import StoreIndex from './pages/storeIndex/index'

// BodyContainet区域的样式
const bodyContainerBarStyle = { position: "relative", marginTop: 0, marginBottom: 128, height: '100%', width: '100%' }

// BodyContainer区域渲染的内容
class BodyContainer extends Component {
    /*
    render() {
        return <div>
                <div>2. navigationBar（导航栏）</div>
                <div>2.1 所有商品|2.2 拼团|2.3 促销</div>
                <div>商品1|商品2|商品3</div>
                <div>商品4|商品5|商品6</div>
                <div>商品7|商品8|商品9</div>
                <IssueList />
            </div>
    }
    */
    render() {
        return <div className='bodyContainer' style={bodyContainerBarStyle}>
            <StoreIndex />
        </div>
    }

    toucha() {
        alert("Im an a")
    }
}

export default BodyContainer