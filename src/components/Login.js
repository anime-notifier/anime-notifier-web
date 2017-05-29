import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { login } from 'actions/user';

import StatusAlert from 'components/StatusAlert';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {modal: false, email: "", password: ""};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  login(){
    this.alert.getWrappedInstance().reset();
    if(this.state.email === ""){
      this.alert.getWrappedInstance().err("Email cannot be empty");
      return;
    }else if(this.state.password === ""){
      this.alert.getWrappedInstance().err("Password cannot be empty");
      return;
    }
    login(this.state.email, this.state.password);
  }

  onSuccess(){
    this.toggle();
  }

  render() {
    return (
      <div>
        <a style={{color: "white", cursor: "pointer"}} onClick={this.toggle}>Login</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <StatusAlert target="login" onSuccess={() => {this.onSuccess()}} ref={(a) => {this.alert = a}} >Login Success!</StatusAlert>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" placeholder="Email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value});}}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" placeholder="Password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value});}}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => {this.login()}}>Login</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
