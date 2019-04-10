import {createStore , applyMiddleware} from 'redux';
import {reducers} from './reducers/main'
import thunk from 'redux-thunk'
const store =  createStore(reducers, applyMiddleware(thunk))

if(module.hot){
    module.hot.accept('./reducers/main', () =>{
        const nextRootReducer = require('./reducers/main').default;
        store.replaceReducer(nextRootReducer)
    });
}
export default store
