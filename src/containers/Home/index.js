import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import css from './css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {userName: ""};
  }

  linkState(state, val){
    const obj = {};
    obj[state] = val;
    this.setState(obj);
  }

  onClick(event){
    if(this.state.userName !== ''){
      this.props.history.push(`/${this.state.userName}`)
    }
    event.preventDefault();
  }

  render() {
    return (
      <div style={css.background} >
        <Row style={css.topRow}>
          <Col>
            <h1 style={css.heading}><strong>ANIME TRACKER</strong></h1>
            <Form onSubmit={(e) => {this.onClick(e)}} >
              <FormGroup style={css.formGroup}>
                <Label for="userName" style={css.formLabel}>MAL username</Label>
                <div style={css.inputDiv}>
                  <Input style={css.input} placeholder="Username" value={this.state.userName} onChange={(e) => {this.linkState('userName', e.target.value)}} />
                </div>
              </FormGroup>
              <Button style={css.inputButton} >Search</Button>
            </Form>
            <br />
          </Col>
        </Row>
        <Row style={css.botRow}>
          <Col>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
