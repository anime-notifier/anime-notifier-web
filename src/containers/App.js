import React, { Component } from 'react';

import { getAnimeList } from 'actions/anime';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: null};
  }

  componentDidMount(){
    getAnimeList().then((res) => {
      this.setState({data: res})
    });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
