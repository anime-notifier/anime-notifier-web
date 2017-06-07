import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as css from './css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.myUserData.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myUserData: state.user.myUserData
  };
};

export default connect(mapStateToProps)(Dashboard);
