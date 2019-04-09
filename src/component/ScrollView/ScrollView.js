import React from 'react'
import './ScrollView.scss'
import Loading from '../loading/loading'
class ScrollView extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onLoadPage.bind(this))
    }
    //离开要解除时间绑定
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onLoadPage.bind(this))
    }
    onLoadPage () {
        let clientHeight = document.documentElement.clientHeight
        let scrollHeight = document.body.scrollHeight
        let scroll = document.documentElement.scrollTop
        let proLoadDis = 30;
        if((scroll + clientHeight) >= scrollHeight - proLoadDis) {
            if(!this.props.isend){
                this.props.loadCallback && this.props.loadCallback()
            }
        }
    }
    render() {
        return (
            <div className="scrollView">
                {this.props.children }
                <Loading isend = { this.props.isend }></Loading>
            </div>
        )
    }
}
export default ScrollView
