import 'component/common.scss';
import './Main.scss';
import {connect} from 'react-redux'
import React from 'react'
import NavHeader from 'component/NavHeader/NavHeader'
import Menu from '../Menu/Menu'
import Comment from '../Comment/Comment'
import Restaurant from '../Restaurant/Restaurant'
import {Route, withRouter, NavLink} from "react-router-dom";

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="detail">
                <NavHeader title={'黄焖鸡'}></NavHeader>
                <div className="tab-bar">
                    {this.renderTabs()}
                </div>
                <Route exact path = '/Menu'  component={Menu}></Route>
                <Route path="/Comment"  component={Comment}/>
                <Route path="/Restaurant"  component={Restaurant}/>
            </div>
        )
    }
    changeTab(){}
    renderTabs(){
        let tabs = this.props.tabs
        return tabs.map((item) => {
            return (
                <NavLink onClick={()=>this.changeTab(item)} replace={true} activeClassName="active" to={'/'+ item.key} key={item.key} className="tab-item">{item.name}</NavLink>
            )
        })
    }
}

export default withRouter(connect(state =>({
    tabs: state.tabReducers.tabs
}), null)(Main))
