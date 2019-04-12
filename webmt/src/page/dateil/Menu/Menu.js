import React from 'react'
import {connect} from 'react-redux'
import './Menu.scss'
import {getListData, itemClick} from "../actions/menuAction.js";
import MenuItem from './MenuItem/MenuItem'
import ShopBar from './ShopBar/ShopBar'
class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.props.dispatch(getListData())
    }

    render() {
        return (
            <div className="menu-inner">
                <div className="left-bar">
                    <div className="left-bar-inner">
                        {this.renderLeft()}
                    </div>
                </div>
                <div className="right-content">
                    {this.renderRight()}
                </div>
                <ShopBar></ShopBar>
            </div>

        )
    }
    renderLeft(){
        let list = this.props.listData.food_spu_tags || [];

        return list.map((item, index)=>{
            let cls = this.props.currentLeftIndex === index ? 'left-item active' : 'left-item';
            return (
                <div onClick={()=>this.itemClick(index)} key={index} className={cls}>
                    <div className="item-text">{item.icon ? <img className="item-icon" src={item.icon} /> : null}{item.name}</div>
                </div>
            );
        });
    }
    itemClick(index){
        this.props.dispatch(itemClick({currentLeftIndex: index}))
    }
    renderRight(){
        let index = this.props.currentLeftIndex;
        let array = this.props.listData.food_spu_tags || [];
        let currentItem = array[index];

        if (currentItem) {
            let title = <p key={1} className="right-title">{currentItem.name}</p>
            return [
                title,
                <div key={2} className="right-list"><div className="right-list-inner">{this.renderRightList(currentItem.spus)}</div></div>
            ]
        } else {
            return null;
        }
    }
    renderRightList(array){
        let _array = array || [];
        return _array.map((item, index)=>{
            if (!item.chooseCount) {
                item.chooseCount = 0;
            }

            return <MenuItem key={index} data={item} _index={index}></MenuItem>
        });
    }
}

export default connect(state =>({
    listData: state.menuReducer.listData,
    currentLeftIndex: state.menuReducer.currentLeftIndex
}),null)(Menu)
