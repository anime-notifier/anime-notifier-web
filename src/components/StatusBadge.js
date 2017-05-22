import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class StatusBadge extends Component {
  render() {
    let child = <i className="fa fa-spin fa-spinner" />;
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
