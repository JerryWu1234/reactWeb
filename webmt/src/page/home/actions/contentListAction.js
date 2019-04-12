import {GET_LIST} from "./actionTypes";

import axios from 'axios'

export const getListData = (page) => (dispatch) => {
    axios({
        method: 'get',
        url: './json/homelist.json'
    }).then((res)=>{
        dispatch({
            type: GET_LIST,
            page,
            obj: res.data
        })
    })
}
