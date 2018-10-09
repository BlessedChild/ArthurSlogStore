import React, { Component } from 'react'

// Header区域的样式
/*
const HeaderBarStyle = { zIndex: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', position: 'fixed', marginTop: '10px', width: '100%', height: 88, backgroundColor: 'rgba(0,0,0,0)' }
const searchBarStyle = { position: 'relative', marginTop: 0, width: '100%', height: 88, backgroundColor: 'rgba(0,0,0,0)', width: '90%' }
const searchBarIconStyle = { position: 'absolute', left: '0px', width: '88px', height: '88px', backgroundColor: 'rgba(0,0,0,0.1)', textAlign: 'center', lineHeight: '88px', borderStyle: 'none', borderRadius: '50px' }
const searchStyle = { position: 'relative', marginTop: 0, backgroundColor: 'rgba(0,0,0,0.1)', width: '100%', height: '84px', fontSize: 40, textAlign: 'center', borderStyle: 'none', borderRadius: '50px', border: '1px solid #F2F2F2' }
*/


// Header区域渲染的内容
class Header extends Component {
    render() {
        return <div className='headerBar'>
                <div className='searchBar'>
                    <div className='searchBarImg'>图片</div>
                    <input placeholder='请输入商品名称' className='searchBarInput'></input>
                </div>
        </div>
    }
}

export default Header