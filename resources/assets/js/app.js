/**
 * Imports
 */
import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './store/reducers'
import {Router, Route, browserHistory} from 'react-router'

import Home from './components/Home';
import About from './components/About';



/**
 * Middlewares
 */
const middlewares = [
  thunkMiddleware
];


const store = createStore(rootReducer,applyMiddleware(...middlewares));
/**
 *
 * Init application
 */
ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
  {/** Public routes */}
  <Route
    path="/about"
    component={About}
  />
  <Route
    path="/"
    component={Home}
  />
  </Router></Provider>, document.getElementById('app'));
