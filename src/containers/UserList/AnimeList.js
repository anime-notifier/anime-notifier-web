import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Media } from 'reactstrap';

import * as css from './css';

import { resetAnimeList, getAnimeStatus } from 'actions/anime';

import StatusBadge from 'components/StatusBadge';
import Spinner from 'components/Spinner';

class AnimeList extends Component {
  componentWillMount(){
    resetAnimeList();
    getAnimeStatus(this.props.provider, this.props.userName);
  }

  render() {
    if(this.props.animeList === "invalid_username"){
      return (
        <div style={{textAlign: 'center'}}>
          <p style={{color: 'white', fontSize: '2em'}}>Username "{this.props.userName}" not found</p>
        </div>
      )
    }
    // Loading screen
    if(this.props.animeList.length === 0){
      return (
        <div style={{textAlign: 'center'}}>
          <Spinner style={{color: 'white', fontSize: "5em"}} />
        </div>
      )
    }
    const list = this.props.animeList.filter(val => val.watchStatus === this.props.statusFilter).map((val, i) => {
      const allEpisodeWatched = val.episodes !== 0 && val.episodes - val.watchCount === 0 ;
      let badge = null;
      if(allEpisodeWatched){
        badge = <StatusBadge available="completed" />
      }else{
        badge = <StatusBadge available={this.props.animeStatus[val.title]} />
      }
      return (
        <Card key={i} style={css.cardDiv}>
          <Media>
            <Media left href="#" style={css.cardLeftMedia}>
              <img src={val.image} alt="anime thumbnail" style={css.cardImage}/>
            </Media>
            <Media body>
              <Media heading>{val.title}  {badge}</Media>
              <p>Episodes: {val.watchCount}/{val.episodes === 0 ? "-" : val.episodes}</p>
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
    animeStatus: state.anime.animeStatus,
    animeList: state.anime.animeList
  };
};

export default connect(mapStateToProps)(AnimeList);
