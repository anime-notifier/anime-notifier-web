import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import LoginForm from './LoginForm';

import css from './css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: ""};
  }

  render() {
    return (
      <Row style={css.topRow}>
        <Col style={css.topCol}>
          <LoginForm />
        </Col>
      </Row>
    );
  }
}

export default Login;
