import React, { Component } from 'react';
import { Card, CardText, Collapse, ListGroup, ListGroupItem } from 'reactstrap'
import MediaQuery from 'react-responsive';

import css from './css';

const statusList = [
  {id: 1, name: 'Watching'},
  {id: 2, name: 'Completed'},
  {id: 3, name: 'On Hold'},
  {id: 4, name: 'Dropped'},
  {id: 6, name: 'Plan To Watch'}
];

class WatchStatus extends Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
  }

  render() {
    const statuses = statusList.map((status, i) => {
      return(
        <a
          key={i}
          style={this.props.statusFilter === status.id ? css.watchStatusActive : css.watchStatusNotActive}
          onClick={() => {this.props.updateStatus(status.id)}}>
          {status.name}
        </a>
      )
    })
    const smallStatuses = (
      <Card inverse style={css.watchStatusCard}>
        <CardText style={css.watchStatusCardTitle} onClick={() => {this.setState({isOpen: !this.state.isOpen})}}>
          {statusList.filter(val => val.id === this.props.statusFilter)[0].name} <i className="fa fa-sort-down" />
        </CardText>
        <Collapse navbar isOpen={this.state.isOpen}>
          <ListGroup>
            {statusList.map((status, i) => {
              return(
                <ListGroupItem
                  key={i}
                  style={this.props.statusFilter === status.id ? css.watchStatusCardActive : css.watchStatusCardNotActive}
                  onClick={() => {this.props.updateStatus(status.id); this.setState({isOpen: false})}}>
                  {status.name}
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Collapse>
      </Card>
    )

    return (
      <div>
        <MediaQuery maxWidth={768}>
          <div style={css.watchStatusCardMargin}>
            {smallStatuses}
          </div>
        </MediaQuery>
        <MediaQuery minWidth={769}>
        <div style={css.watchStatusMargin}>
          <div style={css.watchStatusList}>
            {statuses}
          </div>
        </div>
        </MediaQuery>
      </div>
    );
  }
}

export default WatchStatus;
