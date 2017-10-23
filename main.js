import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
require('./src/less/minimal.less');

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import tripsApp from './reducers'
import  {viewTrip} from './actions'
//import createSagaMiddleware from 'redux-saga'
//import {helloSaga} from './sagas'

//const sagaMiddleware = createSagaMiddleware()
const store = createStore(tripsApp)
//sagaMiddleware.run(helloSaga)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log("State changed", store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('app'));

store.dispatch(viewTrip('59eb7c4c1079661e84418da8'))
