import React from 'react'
import {connect} from 'react-redux'
import './ListItem.scss'
/**
 * @description 列表单个组件
 */

class ListItem extends React.Component{
    constructor(props){
        super(props)
    }
    /**
     * 渲染是否新到和品牌标签
    * */
    renderBrand(data){
        if(data.brand_type){
            return(<div className="brand brand-pin">品牌</div>)
        }else{
            return (<div className="brand brand-xin">新到</div>)
        }
    }
    /**
     * 渲染是星星
     * */
    renderScore(data){
        let wm_poi_score = data.wm_poi_score || ''
        let score = wm_poi_score.toString();
        let scoreArray = score.split('.');
        let fullstar = parseInt(scoreArray[0]);
        let halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
        let nullstar = 5 - fullstar - halfstar
        let starjsx = []
        // 渲染满星jsx
        for (let i = 0 ; i < fullstar ; i++) {
            starjsx.push(<div key={i + 'full'} className="star fullstar"></div>)
        }

        // 渲染满星jsx
        if (halfstar) {
            for (let j = 0 ; j < halfstar ; j++) {
                starjsx.push(<div key={j + 'half'} className="star halfstar"></div>)
            }
        }

        // 渲染0星jsx
        if (nullstar) {
            for (let k = 0 ; k < nullstar ; k++) {
                starjsx.push(<div key={k + 'null'} className="star nullstar"></div>)
            }
        }

        return starjsx;
    }
    renderMonthNum(data){
        let num = data.month_sale_num;
        if(num>999){
            return '999+'
        }
        return num
    }
    renderMeituanFlag(data){
        if(data.delivery_type){
            return <div className="item-meituan-flag">美团专送</div>
        }
        return null
    }
    renderOthers(data){
        let array = data.discounts2
        return array.map((item, index) => {(
            <div key={index} className="other-info">
                <img src={item.icon_url} className="other-tag"/>
                <div className="other-content">{item.info}</div>
            </div>
        )})
    }
    render() {
        let Data = this.props.itemData
        return (
            <div className="r-item-content">
                <img className="item-img" src={Data.pic_url} />
                {this.renderBrand(Data)}
                <div className="item-info-content">
                    <p className="item-title">{Data.name}</p>
                    <div className="item-desc clearfix">
                        <div className="item-score">{this.renderScore(Data)}</div>
                        <div className="item-count">月售{this.renderMonthNum(Data)}</div>
                        <div className="item-distance">|{Data.distance}</div>
                        <div className="item-time">{Data.mt_delivery_time}</div>
                    </div>
                    <div className="item-price">
                        <div className="item-pre-price">{Data.min_price_tip}</div>
                        {this.renderMeituanFlag(Data)}
                    </div>
                    <div className="item-others">
                        {this.renderOthers(Data)}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(ListItem)
