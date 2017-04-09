import React, { Component } from 'react';
import { getAnimeList } from 'actions/anime';

class Home extends Component {
  componentDidMount(){
    getAnimeList();
  }

  render() {
    return (
      <div>
        <p>home</p>
      </div>
    );
  }
}

export default Home;
