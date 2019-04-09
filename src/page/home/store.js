import {createStore ,compose, applyMiddleware} from 'redux';
import { routerMiddleware } from 'connected-react-router'
import {reducers} from './reducers/main'
import thunk from 'redux-thunk'

import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
// const store =  createStore(reducers, applyMiddleware(thunk))

history.push('home.html#/home');


export default function configureStore(preloadedState) {
    const store = createStore(
        reducers(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history), // for dispatching history actions
                // ... other middlewares ...
            ),
        ),
    )

    return store
}
