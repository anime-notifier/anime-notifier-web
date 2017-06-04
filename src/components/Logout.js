import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { logout } from 'actions/user';

class Logout extends Component {
  render() {
    logout();
    return (
      <Redirect to="/" />
    );
  }
}

export default Logout;
