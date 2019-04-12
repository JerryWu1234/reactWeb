import React from 'react'
import {connect} from 'react-redux'
import './Order.scss'
import ListItem from './ListItem/ListItem'
import {getOrderList} from "../actions/orderReducer";
import ScrollView from 'component/ScrollView/ScrollView.js'
class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isend: false,
            loadingText: '加载中'
        }
        this.page = 0
        this.fetchData(this.page)
    }
    onLoadPage () {
        this.page++
        if(this.page > 3){
            this.setState({
                isend: true
            })
        } else {
            this.fetchData(this.page)
        }
    }
    render() {
        return(
            <div className="order">
                <div className="header">订单</div>
                <div className="order-list">
                    <ScrollView loadCallback={()=>this.onLoadPage()} isend={this.state.isend}>
                        {this.renderList()}
                    </ScrollView>
                </div>
            </div>
        )
    }
    renderList(){
        let list = this.props.lists;
        return list.map((item, index)=>{
            return <ListItem itemData={item} key={index}></ListItem>
        });
    }
    fetchData(){

        this.props.dispatch(getOrderList(1))
    }
}
export default connect(state =>({
    lists: state.orderReducer.lists
}),null)(Order)
