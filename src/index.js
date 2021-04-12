import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './structure/Routes'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

