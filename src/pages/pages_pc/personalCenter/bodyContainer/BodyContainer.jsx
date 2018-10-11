import React, { Component } from 'react'


// BodyContainer区域渲染的内容
class BodyContainer extends Component {

    render() {
        return <div className='personalCenter_bodyContainer'>
            <div>个人中心</div>
            <div>姓名</div>
            <div>地址</div>
            <div>联系电话</div>
            <div>邮箱</div>
        </div>
    }
}

export default BodyContainer