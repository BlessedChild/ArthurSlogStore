import React, { Component } from 'react'

import './Header.less'
// Header区域渲染的内容
class Header extends Component {
    render() {
        return <div className='mobile_HeaderBar'>
                <div className='mobile_SearchBar'>
                    <div className='mobile_SearchBarImg'>图片</div>
                    <input placeholder='请输入商品名称' className='mobile_SearchBarInput'></input>
                </div>
        </div>
    }
}

export default Header