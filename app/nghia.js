import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import {Provider} from 'react-redux';
import store from './store';

/*
ReactDOM.render(

  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
);*/


var render = () => {
  ReactDOM.render(<Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
  );
};

store.subscribe(render);
render();
