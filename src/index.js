import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux"
import { Authreducers } from "./reducers/Authreducers"
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk"



const store = createStore(Authreducers, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} ><App />
    </Provider>  </React.StrictMode>,
  document.getElementById('root')
);


