import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from "./state/store"
import App from './views/components/App/App';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
