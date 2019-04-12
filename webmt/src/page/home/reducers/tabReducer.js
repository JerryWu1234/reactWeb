import {ADD_TODO ,CHANGE_TAB} from "../actions/actionTypes";
import { TABKEY } from '../config.js'
const initState = {
   tabs: [
       {
           name: '首页',
           key: TABKEY.home
       },
       {
           name: '订单',
           key: TABKEY.order
       },
       {
           name: '我的',
           key: TABKEY.my
       },
   ],
    activeKey: TABKEY.home
}
const addTodo = (state, action)=> {
    let objNum = action.obj.num;
    let num = state.num
    return {
        num: num +  objNum
    }
}
const changetab = (state, action) => {
    let activeKey = action.obj.activeKey;
    return {...state, activeKey }
}
export const tabReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO: return addTodo(state, action)
        case CHANGE_TAB: return changetab(state, action)
        default: return state;
    }
}
