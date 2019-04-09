import {GET_LIST} from "../actions/actionTypes";

const initState = {
    list: []
}
const getListData = (state, action) => {
    if(action.page === 0){
        return {...state, list: action.obj.data.poilist}
    }else {
       let list = state.list;
       return {...state, list: list.concat(action.obj.data.poilist)}
    }
}

export const contentListReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST: return getListData(state, action);
        default:return state
    }
}
