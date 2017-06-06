import { Component } from 'react';
import { connect } from 'react-redux';

import { checkSession, getMyUserData } from 'actions/user';

class SessionHandler extends Component {
  componentWillMount(){
    checkSession();
  }

  componentWillUpdate() {
    checkSession();
  }

  componentDidUpdate() {
    if(this.props.isLoggedIn && Object.keys(this.props.myUserData).length === 0){
      getMyUserData();
    }
  }

  render() {
    return null;
  }
}


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    myUserData: state.user.myUserData,
  };
};

export default connect(mapStateToProps)(SessionHandler);
