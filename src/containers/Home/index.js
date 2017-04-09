import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
      <div>
        <Form>
          <FormGroup>
            <Label for="userName">MAL username</Label>
            <Input type="userName" placeholder="Username" value={this.state.userName} onChange={(e) => {this.linkState('userName', e.target.value)}} />
          </FormGroup>
        </Form>
        <Button onClick={() => {this.onClick()}}>Search</Button>
        <ul>
          {this.props.animeList.map((val, i) => {
            return <p key={i}>{val.title} : {val.available.toString()}</p>;
          })}
        </ul>
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
