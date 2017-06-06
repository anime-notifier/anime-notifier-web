import { Component } from 'react';

import { logout } from 'actions/user';

class Logout extends Component {
  render() {
    logout().then(() => {
      window.location.replace('/')
    });
    return null;
  }
}

export default Logout;
