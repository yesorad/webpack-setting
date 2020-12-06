import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <App />
  </Router>,
  document.getElementById('root'),
);
