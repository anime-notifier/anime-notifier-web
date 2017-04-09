import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimeList } from 'actions/anime';

class Home extends Component {
  componentWillMount(){
    getAnimeList();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.animeList.map((val) => {
            return <li>{val.title}</li>;
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
