import {GET_LISY_DATA} from "./actionTypes";
import axios from 'axios'
export const getListData = (obj) =>  async (dispatch) => {
    let resp = await axios({
        method: 'get',
        url: '/json/food.json'
    });
    dispatch({
        type: GET_LISY_DATA,
        obj: resp.data
    })
}
