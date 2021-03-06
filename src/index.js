import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import { configureStore, history } from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

// Start websocket
import { setupWebsocket } from 'websocket';
setupWebsocket();

const store = configureStore();
export { store }

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
