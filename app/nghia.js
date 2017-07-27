import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
  
  <Provider store={store}>
    <p>NGhia</p>,  
    <Main/>
  </Provider>,
  document.getElementById('root')
);