import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers';

const history = createHistory();
exports.history = history;
const routeMiddleWare = routerMiddleware(history);

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
    applyMiddleware(routeMiddleWare),
  );
  return store;
}

exports.configureStore = configureStore;
