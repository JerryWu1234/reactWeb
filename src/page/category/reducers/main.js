import {categroyReducer} from './categroyReducer'
import {combineReducers} from "redux"; // 合并多个reduers

export const reducers = combineReducers({
    categroyReducer,
})
