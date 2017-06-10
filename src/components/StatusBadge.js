import React, { Component } from 'react';
import { Badge } from 'reactstrap';

import Spinner from './Spinner';

class StatusBadge extends Component {
  render() {
    let child = <Spinner />;
    let color = "default";
    switch(this.props.available){
      case true:
        color = "success";
        child = "Available";
        break;
      case false:
        color = "warning";
        child = "Not Available";
        break;
      case "completed":
        color = "info";
        child = "Completed";
        break;
      case "unknown":
        child = "Unknown";
        break;
      default:
        break;
    }
    return (
      <Badge color={color}>{child}</Badge>
    );
  }
}

export default StatusBadge;
