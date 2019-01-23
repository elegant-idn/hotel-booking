import React, { Component } from 'react';
import $ from 'jquery';
import logo from './../img/papriika-logo-wordmark-2-white.svg';

$(document).ready(function(){
  $("button").click(function(){
    $("#navbarBasic").fadeToggle("650", "swing");
  });
});

class HeaderDark extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-black"
        style={{
          // boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.3)'
        }}>
        <div className="container fixed-top navbar-fixed-container">
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar top-bar bg-white"></span>
            <span class="icon-bar bottom-bar bg-white"></span>       
          </button>

          <a href="/" className="navbar-brand">
            <img 
              src={logo} 
              className="navbar-brand-img"
              alt="Papriika"
            />
          </a>
          <div className="collapse navbar-collapse bg-black" id="navbarBasic">
              <div className="container text-center"
                style={{
                  paddingTop: '9px',
                  paddingBottom: '13px'
                }}>
                <a href="/" className="navbar-brand navbar-brand-collapsed">
                  <img 
                    src={logo} 
                    className="navbar-brand-img"
                    alt="Papriika"
                  />
                </a>
              </div>
            <div className="navbar-text text-white">
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

export default HeaderDark;
