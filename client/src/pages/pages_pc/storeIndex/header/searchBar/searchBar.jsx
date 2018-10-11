import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return <div className='pc_SearchBar'>
            <div className='pc_SearchBarImg'>图片</div>
            <input placeholder='请输入商品名称' className='pc_SearchBarInput'></input>
        </div>
    }
}

export default SearchBar