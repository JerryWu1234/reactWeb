import React from 'react'
import {connect} from 'react-redux'
import NavHeader from 'component/NavHeader/NavHeader'
import Header from '../Header/Header'
import ContentList from '../ContentList/ContentList';

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <div className="category">
                    <NavHeader title={'分类'}></NavHeader>
                    <Header></Header>
                    <ContentList></ContentList>
                </div>
            </div>
        )
    }
}
export default connect(null, null)(Main)
