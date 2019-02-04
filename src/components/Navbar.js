import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';
import styled from 'styled-components';
import '../css/Navbar.css';
import Logo from '../components/Logo';
import NavbarToggler from '../components/NavbarToggler';

const Nav = styled.nav`
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  background-color: #fff;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Div = styled.div`
  height: 43.5px;
`;

class Navbar extends Component {
  render() {
    return (
      <Nav 
        className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <Logo className="navbar-brand-img" logoAlt="Papriika Logo"/>
          </a>
          <NavbarToggler className="d-flex align-items-right navbar-toggler-dark"/>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <Div className="container d-flex align-items-center justify-content-center d-md-none">
              <a 
              className="navbar-brand d-flex align-items-center justify-content-center" 
              href="/"
              style={{
                marginRight: 0
              }}>
                <Logo className="navbar-brand-img" logoAlt="Papriika Logo"/>
              </a>
            </Div>
            <span className="navbar-text navbar-text-tagline">
              The Hotel Club
            </span>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:support@papriika.com?subject=Mail from Papriika.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
