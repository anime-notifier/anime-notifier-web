import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import * as css from './css';
import WatchStatus from './WatchStatus';
import AnimeList from './AnimeList';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {statusFilter: 1};
  }

  render() {
    const params = this.props.match.params;
    return (
      <div style={css.background}>
        <Row style={css.topRow}>
          <Col style={css.colPadding}>
            <h1 style={css.userHeading}>{this.props.match.params.userName}</h1>
          </Col>
        </Row>
        <Row style={css.watchStatusRow}>
          <Col style={css.colPadding}>
            <WatchStatus statusFilter={this.state.statusFilter} updateStatus={(id) => {this.setState({statusFilter: id})}} />
          </Col>
        </Row>
        <Row style={css.listRow}>
          <Col style={css.colPadding}>
            <AnimeList provider={params.provider} userName={params.userName} statusFilter={this.state.statusFilter}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserList;
