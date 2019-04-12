import {tabReducers} from './tabReducer'

import {combineReducers} from "redux"; // 合并多个reduers
import { connectRouter } from 'connected-react-router'
export const reducers = (history) => combineReducers({
    tabReducers,
    router: connectRouter(history)
})


