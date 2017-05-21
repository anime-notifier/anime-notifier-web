import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MediaQuery from 'react-responsive';

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
    const flexItem  = [
      {icon: "fa-line-chart", title: "Open Source", desc: "All of the codes used to power this project is available publicly. Anyone can modify and contribute to make it better!"},
      {icon: "fa-line-chart", title: "Simple and effective", desc: "The Process is extremely simple. Simply enter your username and view the results compiled into a single list."},
      {icon: "fa-line-chart", title: "Free of charge", desc: "Best of all, the service is free of charge! Feel free to enjoy and keep track of those anime you can't wait to watch."}
    ];
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
            <div style={css.flexRow}>
              {
                flexItem.map((item) => {
                  return (
                    <MediaQuery maxWidth={768}>
                      {(matches) => {
                        return (
                          <div style={matches? css.flexItemSmall : css.flexItem }>
                            <i className={`fa ${item.icon}`} style={css.flexLogo} />
                            <h4>{item.title}</h4>
                            <p style={css.flexDesc}>{item.desc}</p>
                          </div>
                        )
                      }}
                    </MediaQuery>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
