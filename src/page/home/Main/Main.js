import React from 'react'
import {connect} from 'react-redux'
import BottomBar from '../bottomBar/BottomBar'
import {Route, withRouter} from "react-router-dom";
import Home from '../Home/Home'
import Order from '../Order/Order'
import My from '../My/My'

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <Route exact path = '/home'  component={Home}></Route>
                <Route path="/order"  component={Order}/>
                <Route path="/my"  component={My}/>
                <BottomBar/>
            </div>
        )
    }
}
const state = (state)=>({
    num: state.tabReducer.num
})
export default withRouter(connect(state, null)(Main))
