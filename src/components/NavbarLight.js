import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';
import Logo from '../components/Logo';

// Value equal to `.collapsing` class is set to none.

$(document).ready( function() {
  $("button").click( function() {
    $("#navbarBasic").animate( {
      opacity: "toggle",
      backgroundColor: "#fff"
    }, 300);
  });
});

class NavbarLight extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light"
        style={{
          backgroundColor: '#fff'
        }}>
        <div className="container">
          <a href="/" className="navbar-brand d-none d-md-block">
            <Logo
              className="navbar-brand-img"
              logoAlt="Papriika"
            />
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar bg-white"></span>
            <span className="icon-bar bottom-bar bg-white"></span>       
          </button>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <span className="navbar-text navbar-text-tagline">
              The world’s best hotels, hand curated.
            </span>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/">Home</a>
              </li>
              {/*
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarLight;
