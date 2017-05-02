import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import {
  Route,
  Switch
} from 'react-router-dom'

import NavBar from 'components/NavBar';

import Home from './Home';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
