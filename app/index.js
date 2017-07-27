import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
        <Main/>
    </Provider>
  ),
  document.getElementById('root')
);

