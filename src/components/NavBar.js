import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap';

import Login from './Login';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let user = "";
    if(this.props.isLoggedIn === true){
      user = <a href="/logout" style={{color: "white"}}>{this.props.myUserData.name}</a>;
    }else if(this.props.isLoggedIn === false){
      user = <Login/>
    }
    return (
      <Navbar light toggleable className="fixed-top" style={{backgroundColor: "rgba(0,0,0,.65)", position: "absolute"}}>
        <NavbarToggler right onClick={() => {this.toggle()}}>
          <i className="fa fa-navicon" style={{color: "white", fontSize: "1.5em"}} />
        </NavbarToggler>
        <NavbarBrand tag="div"><Link to="/" style={{color: "white", textDecoration: 'none'}}>AniTrack</Link></NavbarBrand>
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {user}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    myUserData: state.user.myUserData,
  };
};

export default connect(mapStateToProps)(NavBar);
