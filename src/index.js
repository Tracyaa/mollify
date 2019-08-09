import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ROUTER
import { BrowserRouter } from 'react-router-dom'

// REDUX
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

// REDUCERS
import postReducer from './redux/postReducer'
import userReducer from './redux/userReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import 'semantic-ui-css/semantic.min.css'
console.log = function(){};
////////////////////////////
const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
