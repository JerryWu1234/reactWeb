import React from 'react'
import {connect} from 'react-redux'
import './Header.scss'
/**
 * @description 头部样式
 */
import SearchBar from '../SearchBar/SearchBar'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="header">
                <SearchBar />
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"/>
            </div>
        )
    }
}

export default connect(null, null)(Header)
