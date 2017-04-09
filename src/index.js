import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import { configureStore, history } from './store';

// Start websocket
import { setupWebsocket } from 'websocket';
setupWebsocket();

const store = configureStore();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
