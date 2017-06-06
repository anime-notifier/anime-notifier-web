import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import {
  Route,
  Switch
} from 'react-router-dom'

import NavBar from 'components/NavBar';

import Home from './Home';

import SessionHandler from './SessionHandler';
import LoginRegister from './LoginRegister';
import UserList from './UserList';
import Logout from 'components/Logout';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            <NavBar />
            <Route path="/" component={SessionHandler} />
            <Route path="/logout" component={Logout} />
            <Switch>
              <Route path="/login" component={LoginRegister} />
              <Route path="/register" component={LoginRegister} />
              <Route path="/:provider/:userName" component={UserList} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
