import {tabReducers} from './tabReducer'
import {menuReducer} from "./menuReducer";
import commentReducer from './commentReducer'
import restanurantReducer from './restanurantReducer'
import {combineReducers} from "redux"; // 合并多个reduers
import { connectRouter } from 'connected-react-router'
export const reducers = (history) => combineReducers({
    tabReducers,
    menuReducer,
    restanurantReducer,
    commentReducer,
    router: connectRouter(history)
})


