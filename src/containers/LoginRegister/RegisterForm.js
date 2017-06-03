import React, { Component } from 'react';
import { Button, Card, Form, FormGroup, Input } from 'reactstrap';

import { register } from 'actions/user';

import StatusAlert from 'components/StatusAlert';

import css from './css';

import { isValidEmail } from 'helper';

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {name: "", email: "", password: "", confirmPassword: ""};
  }

  register(e){
    e.preventDefault();
    this.alert.getWrappedInstance().reset();
    if(this.state.name === ""){
      this.alert.getWrappedInstance().err("Username cannot be empty");
      return;
    }else if(this.state.email === ""){
      this.alert.getWrappedInstance().err("Email cannot be empty");
      return;
    }else if(!isValidEmail(this.state.email)){
      this.alert.getWrappedInstance().err("Invalid email");
      return;
    }else if(this.state.password === ""){
      this.alert.getWrappedInstance().err("Password cannot be empty");
      return;
    }else if(this.state.password.length < 8){
      this.alert.getWrappedInstance().err("Password must be at least 8 characters long");
      return;
    }else if(this.state.confirmPassword === ""){
      this.alert.getWrappedInstance().err("Confirm password cannot be empty");
      return;
    }else if(this.state.confirmPassword !== this.state.password){
      this.alert.getWrappedInstance().err("Password must be the same as confirm password");
      return;
    }
    register(this.state.name, this.state.email, this.state.password);
  }

  onSuccess(){
    this.props.history.replace('/');
  }

  render() {
    return (
      <Card style={css.card}>
        <h3 style={css.loginTitle}>AniTrack</h3>
        <StatusAlert target="register" onSuccess={() => {this.onSuccess()}} ref={(a) => {this.alert = a}} >Register Success!</StatusAlert>
        <Form onSubmit={(e) => {this.register(e)}}>
          <FormGroup>
            <Input style={css.inputBox} type="text" placeholder="Username" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value});}}/>
          </FormGroup>
          <FormGroup>
            <Input style={css.inputBox} type="email" placeholder="Email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value});}}/>
          </FormGroup>
          <FormGroup>
            <Input style={css.inputBox} type="password" placeholder="Password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value});}}/>
          </FormGroup>
          <FormGroup>
            <Input style={css.inputBox} type="password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={(e) => {this.setState({confirmPassword: e.target.value});}}/>
          </FormGroup>
          <Button type="submit" style={css.loginButton}>Register</Button>{' '}
        </Form>
      </Card>
    );
  }
}

export default RegisterForm;
