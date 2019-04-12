import {categroyReducer} from './categroyReducer'
import contentListReducer from './contentreducer'
import {combineReducers} from "redux"; // 合并多个reduers

export const reducers = combineReducers({
    categroyReducer,
    contentListReducer
})
