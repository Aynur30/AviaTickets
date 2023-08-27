import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './fonts/OpenSans/OpenSans-Medium.ttf'
import './index.scss';
import App from './components/App/App';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <App />
  </Provider>

);