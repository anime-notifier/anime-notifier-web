import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';

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
    return (
      <Navbar light toggleable className="fixed-top" style={{backgroundColor: "rgba(0,0,0,.65)", position: "absolute"}}>
        <NavbarToggler right onClick={() => {this.toggle()}}>
          <i className="fa fa-navicon" style={{color: "white", fontSize: "1.5em"}} />
        </NavbarToggler>
        <NavbarBrand><Link to="/" style={{color: "white", textDecoration: 'none'}}>AniTrack</Link></NavbarBrand>
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{color: "white"}}>About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
