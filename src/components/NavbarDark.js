import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';
import logo from './../img/papriika-logo-wordmark-1-white.svg';

// Value equal to `.collapsing` class is set to none.

$(document).ready( function() {
  $("button").click( function() {
    $("#navbarBasic").animate( {
      opacity: "toggle",
      backgroundColor: "#1700c4"
    }, 300);
  });
});

class NavbarDark extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark">
        <div className="container-fluid fixed-top navbar-fixed-container"
          style={{
            maxWidth: '1400px'
          }}>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar bg-white"></span>
            <span className="icon-bar bottom-bar bg-white"></span>       
          </button>
          <a href="/" className="navbar-brand"
            style={{
              zIndex: '4000'
            }}>
            <img 
              src={logo} 
              className="navbar-brand-img"
              alt="Papriika"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <span className="navbar-text">
              The world’s best hotels, hand curated
            </span>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarDark;
