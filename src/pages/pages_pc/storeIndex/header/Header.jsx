import React, { Component } from 'react'

import NavigationBar from './navigationBar/navigationBar'
import SearchBar from './searchBar/searchBar'

import './Header.less'
// Header区域渲染的内容
class Header extends Component {
    render() {
        return <div className='pc_HeaderBar'>
            <NavigationBar changePage={this.props.changePage}/>
            <SearchBar />
        </div>
    }
}

export default Header