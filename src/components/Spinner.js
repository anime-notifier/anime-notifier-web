import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return(
      <i className="fa fa-spin fa-spinner" {...this.props} />
    );
  }
}

export default Spinner;
