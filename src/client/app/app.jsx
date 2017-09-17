import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducer from './store/reducers';
import { fetchMessages, checkUserExists } from './store/actions';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <LoginOrChat />
            </Provider>
        );
    }
}
