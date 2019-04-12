import {GET_ORDER_LIST} from "../actions/actionTypes";

const initState = {
    lists: []
}

const getOrderList = (state, action) => {
    if(action.page === 0){
        return {...state, lists: action.obj.data.digestlist}
    }else {
        let list = state.lists;
        return {...state, lists: list.concat(action.obj.data.digestlist)}
    }
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ORDER_LIST: return getOrderList(state, action)
        default: return state;
    }
}
