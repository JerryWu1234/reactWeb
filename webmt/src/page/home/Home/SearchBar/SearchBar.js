import React from 'react'
import {connect} from 'react-redux'
import './SearchBar.scss'
/**
 * @description 搜索栏目
 */


class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="search-bar">
                <div className="bar-location">
                    <div className="location-text"></div>
                    <div className="location-icon"></div>
                </div>
                <div className="search-btn">
                    <p className="place-holder"></p>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(SearchBar)
