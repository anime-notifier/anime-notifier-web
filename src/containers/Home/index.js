import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

import background from 'assets/background.jpg';

import { getAnimeList } from 'actions/anime';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {userName: ""};
  }

  onClick(){
    if(this.state.userName !== ''){
      getAnimeList(this.state.userName);
    }
  }

  linkState(state, val){
    const obj = {};
    obj[state] = val;
    this.setState(obj);
  }

  render() {
    return (
      <div style={{backgroundColor: '#111f27', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 600px', backgroundImage: `url(${background})`, backgroundPosition: 'top', maxWidth: '100%'}}>
        <Row style={{maxWidth: '100%', margin: 0}}>
          <Col>
            <h1 style={{textAlign: 'center', paddingTop: '250px', color: 'white'}}><strong>ANIME TRACKER</strong></h1>
            <FormGroup style={{maxWidth: '400px', margin: '0 auto'}}>
              <Label for="userName" style={{display: 'block', textAlign: 'center', color: 'white'}}>MAL username</Label>
              <div style={{borderRadius: '0.25em', border: '2px solid #fff'}}>
                <Input style={{textAlign: 'center', opacity: '0.7'}} type="userName" placeholder="Username" value={this.state.userName} onChange={(e) => {this.linkState('userName', e.target.value)}} />
              </div>
            </FormGroup>
            <Button style={{opacity: '0.9', margin: '0 auto', display: 'block', marginTop: '15px'}} onClick={() => {this.onClick()}}>Search</Button>
          </Col>
        </Row>
        <Row style={{paddingTop: '200px', margin: 0}}>
          <Col>
            <ul style={{color: 'white'}}>
            {this.props.animeList.map((val, i) => {
              return <p key={i}>{val.title} : {val.available.toString()}</p>;
            })}
            </ul>
            hi
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    animeList: state.anime.animeList
  };
};

export default connect(mapStateToProps)(Home);
