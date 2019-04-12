import React from 'react'
import {connect} from 'react-redux'
import './Category.scss'
/**
 * @description 外卖类目
 */
import {getHeaderData} from "../../actions/categoryAction";

class Category extends React.Component{
    constructor(props){
        super(props)
        this.fetchData()
    }
    fetchData() {
        this.props.dispatch(getHeaderData())
    }
    renderItems(){
        let items = this.props.items
        items = items.splice(0, 8)
        return items.map((item, index) => {
            return (
                <div key={index} className="category-item">
                    <img src={item.url} className="item-icon" alt=""/>
                    <p className="item-name">{item.name}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="category-content clearfix">
                {this.renderItems()}
            </div>
        )
    }
}

export default connect(state => ({
    items: state.categoryReducer.items
}), null)(Category)
