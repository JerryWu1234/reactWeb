import {tabReducer} from './tabReducer'
import {categoryReducer} from './categoryRuducer'
import {contentListReducer} from "./contentListReducer";
import {orderReducer} from "./orderReducer";
import {combineReducers} from "redux"; // 合并多个reduers
import { connectRouter } from 'connected-react-router'

export const reducers = (history) => combineReducers({
    tabReducer,
    contentListReducer,
    categoryReducer,
    orderReducer,
    router: connectRouter(history)
})
