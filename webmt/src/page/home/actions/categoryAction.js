import {HEAD_DATA} from "./actionTypes";
import axios from "axios";

export const getHeaderData = () => (dispatch) => {
    axios(
        {
            method: 'post',
            url: 'http://localhost:3000/api',
            data: {
                url: 'http://i.waimai.meituan.com/ajax/v7/home/head',
                params: {
                    not_need_primary_filter: false,
                    userid: 280770501
                }
            }
        }
    ).then((res) => {
        dispatch({
            type: HEAD_DATA,
            obj: res.data
        })
    })
}
