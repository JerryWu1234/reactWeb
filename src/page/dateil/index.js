import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store'
import {Provider} from 'react-redux'
import Container from './Main/Container'
import {Switch, BrowserRouter} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import {history} from "./store";
const store = configureStore()
if(module.hot){
    module.hot.accept('./reducers/main', () =>{
        const nextRootReducer = require('./reducers/main').default;
        store.replaceReducer(nextRootReducer)
    });
}
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter basename={`/dateil.html#`}>
                <Switch>
                    <Container />
                </Switch>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
