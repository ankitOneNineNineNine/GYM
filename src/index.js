import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { setCart, setUser } from './state/reducers';

const rootReducer = combineReducers({ user: setUser, cart: setCart })
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
