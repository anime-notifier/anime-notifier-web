import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Media } from 'reactstrap';

import css from './css';

import { getAnimeList } from 'actions/anime';

import StatusBadge from 'components/StatusBadge';

class AnimeList extends Component {
  componentWillMount(){
    getAnimeList(this.props.userName);
  }

  render() {
    // Loading screen
    if(this.props.malAnimeList.length === 0){
      return (
        <div style={{textAlign: 'center'}}>
          <i className="fa fa-spin fa-spinner" style={{color: 'white', fontSize: "5em"}} />
        </div>
      )
    }
    const list = this.props.malAnimeList.filter(val => val.my_status === this.props.statusFilter).map((val, i) => {
      return (
        <Card key={i} style={css.cardDiv}>
          <Media>
            <Media left href="#" style={css.cardLeftMedia}>
              <img src={val.series_image} alt="anime thumbnail" style={css.cardImage}/>
            </Media>
            <Media body>
              <Media heading>{val.series_title}  <StatusBadge available={this.props.animeList[val.series_title]} /></Media>
              <p>Episodes: {val.my_watched_episodes}/{val.series_episodes === 0 ? "-" : val.series_episodes}</p>
            </Media>
          </Media>
        </Card>
      );
    })
    return (
      <div>{list}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    animeList: state.anime.animeList,
    malAnimeList: state.anime.malAnimeList
  };
};

export default connect(mapStateToProps)(AnimeList);
