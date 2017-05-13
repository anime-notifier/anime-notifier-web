import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import css from './css';
import WatchStatus from './WatchStatus';
import AnimeList from './AnimeList';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {statusFilter: 1};
  }

  render() {
    return (
      <div style={css.background}>
        <Row style={css.topRow}>
          <Col>
            <h1 style={css.userHeading}>{this.props.match.params.userName}</h1>
          </Col>
        </Row>
        <Row style={css.watchStatusRow}>
          <Col>
            <WatchStatus statusFilter={this.state.statusFilter} updateStatus={(id) => {this.setState({statusFilter: id})}} />
          </Col>
        </Row>
        <Row style={css.listRow}>
          <Col>
            <AnimeList userName={this.props.match.params.userName} statusFilter={this.state.statusFilter}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserList;
