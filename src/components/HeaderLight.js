import React, { Component } from 'react';
import $ from 'jquery';
import logo from './../img/papriika-logo-wordmark-1.svg';

// Value equal to `.collapsing` class in App.css
$(document).ready(function(){
  $("button").click(function(){
    $("#navbarBasic").fadeToggle("500", "linear");
  });
});

class HeaderLight extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white"
        style={{
          borderBottom: '1px solid #eee'
        }}>
        <div className="container fixed-top navbar-fixed-container">
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar bg-black"></span>
            <span className="icon-bar bottom-bar bg-black"></span>       
          </button>
          <a href="/" className="navbar-brand"
            style={{
              zIndex: '4000'
            }}>
            <img 
              src={logo} 
              className="navbar-brand-img brand-img-light"
              alt="Papriika"
            />
          </a>

          <div className="collapse navbar-collapse bg-white" id="navbarBasic">
            <div className="navbar-text text-black-50">
              The world’s best hotels, hand curated
            </div>
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

export default HeaderLight;
