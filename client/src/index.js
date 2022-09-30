import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxThunk from 'redux-thunk'


import './index.css';
import App from './App';
import reducers from './reducers/index'
import reportWebVitals from './reportWebVitals';

const store = createStore( reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)))

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
