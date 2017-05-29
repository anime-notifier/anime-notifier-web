import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import { resetStatus } from 'actions/status';

class StatusAlert extends Component {
  constructor(props){
    super(props);
    this.state = {alert: {}};
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.about === this.props.target){
      if(nextProps.status === "success"){
        this.props.onSuccess();
        this.setState({alert: {color: "success", message: this.props.children}})
      }else{
        this.setState({alert: {color: "danger", message: nextProps.error}})
      }
      resetStatus();
    }
  }

  reset(){
    this.setState({alert: {}})
  }

  err(message){
    this.setState({alert: {color: "danger", message}})
  }

  render() {
    const alert = Object.keys(this.state.alert).length === 0 ? null : <Alert color={this.state.alert.color}>{this.state.alert.message}</Alert>
    return (
      <div>
        {alert}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    about: state.status.about,
    status: state.status.status,
    error: state.status.error
  };
};

export default connect(mapStateToProps, null, null, { withRef: true })(StatusAlert);
