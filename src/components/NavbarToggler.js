import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';

// Value equal to `.collapsing` class is set to none.

$(document).ready( function() {
  $("button").click( function() {
    $("#navbarBasic").animate( {
      opacity: "toggle",
      backgroundColor: "#fff"
    }, 300);
  });
});

class NavbarToggler extends Component {
  render() {
    return (
      <button 
        className="navbar-toggler collapsed" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarBasic" 
        aria-controls="navbarBasic" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        style={this.props.style}
      >
        <span className={`icon-bar top-bar ${this.props.className}`}></span>
        <span className={`icon-bar bottom-bar ${this.props.className}`}></span>
      </button>
    );
  }
}

export default NavbarToggler;