import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';
import Logo from '../components/Logo';
import NavbarToggler from '../components/NavbarToggler';

// Value equal to `.collapsing` class is set to none.

$(document).ready( function() {
  $("button").click( function() {
    $("#navbarBasic").animate( {
      opacity: "toggle",
      backgroundColor: "#fff"
    }, 300);
  });
});

class Navbar extends Component {
  render() {
    return (
      <nav 
        className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}
        >
        <div className="container">
          <a href="/" className="navbar-brand">
            <Logo
              className="navbar-brand-img"
              logoAlt="Papriika"
            />
          </a>
          <NavbarToggler
            className="navbar-toggler-dark"
          />
          <div className="collapse navbar-collapse" id="navbarBasic">
            <span className="navbar-text navbar-text-tagline">
              The world’s best hotels, hand curated.
            </span>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:guy@papriika.com?subject=Mail from Papriika.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
