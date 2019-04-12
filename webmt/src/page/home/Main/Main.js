import React from 'react'
import {connect} from 'react-redux'
import BottomBar from '../bottomBar/BottomBar'
import {Route, withRouter} from "react-router-dom";
import Home from '../Home/Home'
import Loading from './Loading';
import Loadable from 'react-loadable'

const Order = Loadable({
    loader: () => import(/* webpackChunkName: "order" */'../Order/Order'),
    loading: Loading,
});

const My = Loadable({
    loader: () => import(/* webpackChunkName: "my" */'../My/My'),
    loading: Loading,
});

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
