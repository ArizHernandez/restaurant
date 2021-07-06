import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { CarritoApp } from './CarritoApp';
import { store } from './store/store';
import './styles/index.scss';


ReactDOM.render(
  <Provider store={store}>
    <CarritoApp />
  </Provider>,
  document.getElementById('root')
);