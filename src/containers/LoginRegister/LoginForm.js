import React, { Component } from 'react';
import { Button, Card, Form, FormGroup, Input } from 'reactstrap';

import { login, getMyUserData } from 'actions/user';

import StatusAlert from 'components/StatusAlert';

import css from './css';

import { isValidEmail } from 'helper';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: ""};
  }

  login(e){
    e.preventDefault();
    this.alert.getWrappedInstance().reset();
    if(this.state.email === ""){
      this.alert.getWrappedInstance().err("Email cannot be empty");
      return;
    }else if(!isValidEmail(this.state.email)){
      this.alert.getWrappedInstance().err("Invalid email");
      return;
    }else if(this.state.password === ""){
      this.alert.getWrappedInstance().err("Password cannot be empty");
      return;
    }
    login({email: this.state.email, password: this.state.password}).then((res) => {
      if(res.status === "success"){
        this.onSuccess();
      }else{
        this.alert.getWrappedInstance().err(res.error);
      }
    })
  }

  onSuccess(){
    getMyUserData();
    this.props.history.push('/');
  }

  render() {
    return (
      <Card style={css.card}>
        <h3 style={css.loginTitle}>AniTrack</h3>
        <StatusAlert target="login" onSuccess={() => {this.onSuccess()}} ref={(a) => {this.alert = a}} >Login Success!</StatusAlert>
        <Form onSubmit={(e) => {this.login(e)}}>
          <FormGroup>
            <Input style={css.inputBox} type="email" placeholder="Email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value});}}/>
          </FormGroup>
          <FormGroup>
            <Input style={css.inputBox} type="password" placeholder="Password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value});}}/>
          </FormGroup>
          <Button type="submit" style={css.loginButton}>Login</Button>{' '}
        </Form>
      </Card>
    );
  }
}

export default LoginForm;
