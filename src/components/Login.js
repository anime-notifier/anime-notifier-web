import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <Link to="/login" style={{color: "white", cursor: "pointer"}}>Login</Link>
      </div>
    );
  }
}

export default Login;
