import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Card, Media } from 'reactstrap';

import css from './css';

import { getAnimeList } from 'actions/anime';

import StatusBadge from 'components/StatusBadge';

class UserList extends Component {
  componentWillMount(){
    getAnimeList(this.props.match.params.userName);
  }

  render() {
    return (
      <div style={css.background}>
        <Row style={css.row}>
          <Col>
            {this.props.malAnimeList.map((val, i) => {
              return (
                <Card key={i} style={{margin: "0px 10px 10px 10px", padding: "10px", backgroundColor: "#00111b", color: "white"}}>
                  <Media>
                    <Media left href="#" style={{marginRight: "15px"}}>
                      <img src={val.series_image} alt="anime thumbnail" style={{width: "48px", height: "68px"}}/>
                    </Media>
                    <Media body>
                      <Media heading>{val.series_title}  <StatusBadge available={this.props.animeList[val.series_title]} /></Media>
                      <p>Episodes: {val.my_watched_episodes}/{val.series_episodes === 0 ? "-" : val.series_episodes}</p>
                    </Media>
                  </Media>
                </Card>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    animeList: state.anime.animeList,
    malAnimeList: state.anime.malAnimeList
  };
};

export default connect(mapStateToProps)(UserList);
