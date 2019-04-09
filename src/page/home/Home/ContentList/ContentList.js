import React from 'react';
import {connect} from 'react-redux'
import './ContentList.scss'
import {getListData} from "../../actions/contentListAction";
import ListItem from './ListItem/ListItem'
import ScrollView from 'component/ScrollView/ScrollView.js'
/**
 * @constructor <Home />
 * @description 首页tab代码
 */

class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 0
        this.fetchList(this.page)
        this.state = {
            isend: false,
            loadingText: '加载中'
        }

    }
    onLoadPage () {
        this.page++
        if(this.page > 3){
            this.setState({
                isend: true
            })
        } else {
            this.fetchList(this.page)
        }
    }


    render(){
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <ScrollView loadCallback={()=>this.onLoadPage()} isend={this.state.isend}>
                    {this.renderItems()}
                </ScrollView>

            </div>
        );
    }
    fetchList(page){
        this.props.dispatch(getListData(page))
    }
    renderItems(){
        let lists = this.props.lists
        return lists.map((item, index) =>{
            return (
                <ListItem key={index} itemData={item}></ListItem>
            )
        })
    }
}

export default connect(state =>({
    lists: state.contentListReducer.list
}), null)(ContentList);
