import {GET_ORDER_LIST} from "./actionTypes";
import axios from 'axios'

export const getOrderList = (page) => (dispatch) => {
    axios({
        method: 'get',
        url: './json/orders.json',
    }).then(res=> {
        dispatch({
            type: GET_ORDER_LIST,
            obj: res.data,
            page,
        })
    })
}
