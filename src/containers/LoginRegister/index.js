import React, { Component } from 'react';
import { UncontrolledAlert, Row, Col } from 'reactstrap';
import {
  Route,
  Switch
} from 'react-router-dom'

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import css from './css';

class LoginRegister extends Component {
  onClick(to){
    this.props.history.replace(to);
  }

  render() {
    return (
      <Row style={css.topRow}>
        <Col style={css.topCol}>
          <Route path="/login/success" render={() => (
            <UncontrolledAlert color="success">Register success!</UncontrolledAlert>
          )} />
          <Row style={css.topRowSelection}>
            <Col onClick={() => {this.onClick('/login')}} xs={6} sm={6} md={6} lg={6} style={this.props.location.pathname.indexOf('/login') >= 0 ? css.topColSelectionActive : css.topColSelectionNotActive}>
              <a style={css.selectionText}>
                Login
              </a>
            </Col>
            <Col onClick={() => {this.onClick('/register')}} xs={6} sm={6} md={6} lg={6} style={this.props.location.pathname.indexOf('/register') >= 0 ? css.topColSelectionActive : css.topColSelectionNotActive}>
              <a style={css.selectionText}>
                Register
              </a>
            </Col>
          </Row>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
          </Switch>
        </Col>
      </Row>
    );
  }
}

export default LoginRegister;
