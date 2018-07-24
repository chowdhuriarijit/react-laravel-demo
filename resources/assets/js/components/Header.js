
import React, { Component } from 'react';
import { Link } from 'react-router'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return ( <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="https://www.google.com">Personal Website</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/about">
                <NavItem  eventKey={1}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/">
                <NavItem  eventKey={2}  href="/">Portfolio</NavItem>
              </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
  }
}

/**
 * Export data table date picker
 */
export default Header