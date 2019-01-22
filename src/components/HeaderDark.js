import React, { Component } from 'react';
import logo from './../img/papriika-logo-wordmark-2-white.svg';

class HeaderDark extends Component {
  render() {
    return (
      // to add 15px white space
      // <div className="bg-white fixed-top navbar-spacer">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a href="/" className="navbar-brand">
          <img 
            src={logo} 
            className="navbar-brand-img"
            alt="Papriika"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-text text-white mx-4"
          style={{
            fontSize: '15px',
            fontWeight: '700'
          }}>
            The world’s best hotels, hand curated
          </div>
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </nav>
      // </div>
    );
  }
}

export default HeaderDark;
