import React, { Component } from 'react';

import css from './css';

class WatchStatus extends Component {
  render() {
    const statusList = [
      {id: 1, name: 'Watching'},
      {id: 2, name: 'Completed'},
      {id: 3, name: 'On Hold'},
      {id: 4, name: 'Dropped'},
      {id: 6, name: 'Plan To Watch'}
    ];
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
    return (
      <div style={css.watchStatusMargin}>
        <div style={css.watchStatusList}>
          {statuses}
        </div>
      </div>
    );
  }
}

export default WatchStatus;
