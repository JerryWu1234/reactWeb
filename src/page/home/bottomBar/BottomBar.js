import React from 'react'
import {connect} from 'react-redux'
import './BottomBar.scss'
import { NavLink, withRouter } from 'react-router-dom';
/**
 * @description 首页底部tab栏
 */
// import {changetab} from "../actions/tabAction";

class BottomBar extends React.Component{
    constructor(props){
        super(props)
    }
    changeTab(item){
        // this.props.dispatch(changetab({
        //     activeKey: item.key
        // }))
        this.props.history.replace(item.key);
    }
    renderItems(){

        let tabs = this.props.tabs
        return tabs.map((item, index) =>{
            let cls = item.key + ' btn-item'
            return(
                <NavLink key={index} className={cls} replace={true} to={"/" + item.key} activeClassName="active" onClick={()=>this.changeTab(item)}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{item.name}</div>
                </NavLink>
            )
        })
    }
    render() {
        return (
            <div className="bottom-bar">
                {
                    this.renderItems()
                }
            </div>
        )
    }
}

export default withRouter(connect(state =>({
    tabs: state.tabReducer.tabs,
    activeKey:  state.tabReducer.activeKey,
}), null)(BottomBar))
